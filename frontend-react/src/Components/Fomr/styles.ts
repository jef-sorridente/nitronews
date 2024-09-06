import styled from "styled-components";
import { colors } from "../../styles";
import { animated } from "@react-spring/web";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  border: 1px solid ${colors.border};
  padding: 32px;
  border-radius: 16px;
  box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;

  max-width: 350px;
  width: 100%;

  button {
    width: 100%;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
  height: 75px;

  label,
  input {
    width: 100%;
  }

  label {
    margin-bottom: 8px;
    font-weight: 500;
  }

  input {
    padding: 6px 12px;

    background-color: ${colors.secundary};
    color: ${colors.textPrimary};

    border: none;
    border-radius: 6px;
    transition: outline 0.3 ease;
    outline: 1px solid ${colors.border};

    &:focus {
      outline: 2px solid ${colors.outline};
      border-color: ${colors.outline};
    }

    &.error {
      outline: 1px solid ${colors.error};
      border-color: ${colors.error};
    }
  }

  .eye {
    position: absolute;
    right: 0;
    width: 28px;
    height: 28px;
    padding: 4px;
    background-color: ${colors.secundary};
    border-radius: 0 6px 6px 0;
    border-left: 1px solid ${colors.border};
    cursor: pointer;
  }

  small {
    position: absolute;
    bottom: 0;
    width: 400px;
  }
`;

export const Password = styled.div`
  display: flex;

  input {
    padding: 6px 30px 6px 12px;
  }
`;

export const Message = styled(animated.div)`
  position: absolute;
  bottom: -60px;
  left: 0;
  box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.2);

  background-color: ${colors.secundary};
  padding: 16px;
  border-radius: 16px;
  max-width: 350px;
  width: 100%;
  border: 1px solid ${colors.secundary};

  text-align: center;
  font-size: 14px;

  &.erro {
    border: 1px solid ${colors.error};
  }
`;
