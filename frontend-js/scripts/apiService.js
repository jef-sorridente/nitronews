export async function submitFormData(formData) {
  const api = "http://localhost:8083/";

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "x-api-key": "ECA1AB4CE8583613A2C759B445E98",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json();

      if (data.tipoErro === "USUARIO_EXISTENTE") {
        throw new Error(
          "Usuário já existente, por favor inserir outro e-mail."
        );
      } else {
        throw new Error("Erro ao cadastra usuário.");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error) {
      throw error;
    } else {
      throw new Error("Ocorreu um erro tente mais tarde.");
    }
  }
}
