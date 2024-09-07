import { submitFormData } from "./apiService";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const submitButton = document.getElementById("submitButton");
  const messageDiv = document.getElementById("message");

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const confirmacaoSenhaInput = document.getElementById("confirmacaoSenha");

  const nomeError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const senhaError = document.getElementById("passwordError");
  const confirmacaoSenhaError = document.getElementById(
    "passwordEConfirmError"
  );

  let checkPassword = false;
  let checkConfirmPassword = false;

  const validateNome = () => {
    if (!nomeInput.value) {
      nomeError.textContent = "O nome é obrigatório";
      nomeInput.classList.add("error");
      return false;
    } else {
      nomeError.textContent = "";
      nomeInput.classList.remove("error");
      return true;
    }
  };

  const validateEmail = () => {
    if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
      emailError.textContent = "Email é obrigatório";
      emailInput.classList.add("error");
      return false;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("error");
      return true;
    }
  };

  const validateSenha = () => {
    if (!senhaInput.value) {
      senhaError.textContent = "A Senha é obrigatória";
      senhaInput.classList.add("error");
      return false;
    } else if (senhaInput.value.length < 8) {
      senhaError.textContent = "A senha deve ter no mínimo 8 caracteres";
      return false;
    } else if (!/[a-z]/.test(senhaInput.value)) {
      senhaError.textContent = "Senha precisa de 1 caractere minúsculo.";
      return false;
    } else if (!/[A-Z]/.test(senhaInput.value)) {
      senhaError.textContent = "Senha precisa de 1 caractere maiúsculo.";
      return false;
    } else if (!/\d/.test(senhaInput.value)) {
      senhaError.textContent = "Senha precisa de 1 caractere numérico.";
      return false;
    } else {
      senhaError.textContent = "";
      senhaInput.classList.remove("error");
      return true;
    }
  };

  const validateConfirmacaoSenha = () => {
    if (!confirmacaoSenhaInput.value) {
      confirmacaoSenhaError.textContent =
        "A confirmação de senha é obrigatório";
      confirmacaoSenhaInput.classList.add("error");
      return false;
    } else if (senhaInput.value !== confirmacaoSenhaInput.value) {
      confirmacaoSenhaError.textContent =
        "As senhas estão diferentes, por favor verificar";
      return false;
    } else {
      confirmacaoSenhaError.textContent = "";
      confirmacaoSenhaInput.classList.remove("error");
      return true;
    }
  };

  const validateForm = () => {
    return (
      validateNome() &&
      validateEmail() &&
      validateSenha() &&
      validateConfirmacaoSenha()
    );
  };

  nomeInput.addEventListener("blur", validateNome);
  emailInput.addEventListener("blur", validateEmail);
  senhaInput.addEventListener("blur", validateSenha);
  confirmacaoSenhaInput.addEventListener("blur", validateConfirmacaoSenha);

  nomeInput.addEventListener("input", validateNome);
  emailInput.addEventListener("input", validateEmail);
  senhaInput.addEventListener("input", validateSenha);
  confirmacaoSenhaInput.addEventListener("input", validateConfirmacaoSenha);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    submitButton.disabled = true;
    messageDiv.textContent = "";

    const resetMessage = setTimeout(() => {
      messageDiv.textContent = "";
      messageDiv.classList.remove("message"), 5000;
    }, 5000);

    try {
      const response = await submitFormData({
        nome: nomeInput.value,
        email: emailInput.value,
        senha: senhaInput.value,
        confirmacaoSenha: confirmacaoSenhaInput.value,
      });

      if (response.erro === false) {
        messageDiv.textContent = "Cadastro realizado com sucesso!";
        messageDiv.classList.add("message");
        resetMessage;
      }
    } catch (error) {
      messageDiv.textContent = `${error.message}`;
      messageDiv.classList.add("message");
      resetMessage;
    } finally {
      submitButton.disabled = false;
    }
  });

  const eye = `<svg class="eye" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z"></path></svg>`;
  const eyeClose = `<svg
              class="eye"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z"
              ></path>
            </svg>`;

  const buttonPass = document.getElementById("checkPass");
  const buttonConfirmPass = document.getElementById("checkConfirPass");

  buttonPass.innerHTML = eye;
  buttonConfirmPass.innerHTML = eye;

  buttonPass.addEventListener("click", () => {
    checkPassword = !checkPassword;
    senhaInput.type = checkPassword ? "text" : "password";
    buttonPass.innerHTML = checkPassword ? eyeClose : eye;
  });

  buttonConfirmPass.addEventListener("click", () => {
    checkConfirmPassword = !checkConfirmPassword;
    confirmacaoSenhaInput.type = checkConfirmPassword ? "text" : "password";
    buttonConfirmPass.innerHTML = checkConfirmPassword ? eyeClose : eye;
  });
});
