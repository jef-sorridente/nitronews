import * as S from "./styles";

import { useState } from "react";
import { useFormik } from "formik";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import * as Yup from "yup";
import { useTransition } from "@react-spring/web";

import { submitFormData } from "../../services/apiService";
import Profile from "../Profile";

const Form = () => {
  const [message, setMessage] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const [checkConfirmPassword, setCheckConfirmPassword] =
    useState<boolean>(false);

  const resetMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const transition = useTransition(message, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  const form = useFormik({
    initialValues: {
      nome: "",
      email: "",
      senha: "",
      confirmacaoSenha: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string().required("O nome é obrigatório"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      senha: Yup.string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .matches(/^(?=.*[a-z]).+$/, "Senha precisa de 1 caractere minúsculo.")
        .matches(/^(?=.*[A-Z]).+$/, "Senha precisa de 1 caractere maiúsculo.")
        .matches(/^(?=.*\d).+$/, "Senha precisa de 1 caractere numérico.")
        .required("A senha é obrigatório"),
      confirmacaoSenha: Yup.string()
        .oneOf(
          [Yup.ref("senha")],
          "As senhas estão diferentes, por favor verificar"
        )
        .required("A confirmação de senha é obrigatório"),
    }),
    onSubmit: async (values) => {
      setLoad(true);
      try {
        const response = await submitFormData(values);

        if (response.erro === false) {
          setMessage("Cadastro relizado com sucesso!");
          resetMessage();
        }
      } catch (error) {
        setMessage(`${error}`);
        resetMessage();
      } finally {
        setLoad(false);
      }
    },
  });

  const getErrorMessage = (fuildName: string, message?: string) => {
    const isTouched = fuildName in form.touched;
    const isInvalid = fuildName in form.errors;

    if (isTouched && isInvalid) return message;
    return "";
  };

  const checkInputHasError = (fuildName: string) => {
    const isTouched = fuildName in form.touched;
    const isInvalid = fuildName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  return (
    <S.Container>
      <h1>Teste Técnico - Nitronews</h1>
      <S.Form onSubmit={form.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.nome}
            className={checkInputHasError("nome") ? "error" : ""}
          />
          <small>{getErrorMessage("nome", form.errors.nome)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.email}
            className={checkInputHasError("email") ? "error" : ""}
          />

          <small>{getErrorMessage("email", form.errors.email)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="senha">Senha</label>
          <S.Password>
            <input
              type={checkPassword ? "text" : "password"}
              id="senha"
              name="senha"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.senha}
              className={checkInputHasError("senha") ? "error" : ""}
            />
            {checkPassword ? (
              <IoMdEyeOff
                className="eye"
                onClick={() => setCheckPassword(false)}
              />
            ) : (
              <IoMdEye className="eye" onClick={() => setCheckPassword(true)} />
            )}
          </S.Password>

          <small>{getErrorMessage("senha", form.errors.senha)}</small>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="confirmacaoSenha">Confirmação de Senha</label>
          <S.Password>
            <input
              type={checkConfirmPassword ? "text" : "password"}
              id="confirmacaoSenha"
              name="confirmacaoSenha"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.confirmacaoSenha}
              className={checkInputHasError("confirmacaoSenha") ? "error" : ""}
            />
            {checkConfirmPassword ? (
              <IoMdEyeOff
                className="eye"
                onClick={() => setCheckConfirmPassword(false)}
              />
            ) : (
              <IoMdEye
                className="eye"
                onClick={() => setCheckConfirmPassword(true)}
              />
            )}
          </S.Password>

          <small>
            {getErrorMessage("confirmacaoSenha", form.errors.confirmacaoSenha)}
          </small>
        </S.InputGroup>

        <button type="submit" disabled={load}>
          {load ? "Carregando..." : "Cadastrar"}
        </button>
        {transition(
          (styles, item) => item && <S.Message style={styles}>{item}</S.Message>
        )}
      </S.Form>
      <Profile />
    </S.Container>
  );
};

export default Form;
