import styled from "styled-components";
import { colors } from "../../styles";

export const ProfileStyle = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.2);
  display: flex;

  flex-direction: column;
  gap: 8px;

  background-color: ${colors.secundary};

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  img {
    width: 30px;
    border-radius: 50%;
  }

  a {
    display: flex;

    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: ${colors.textSecundary};

    &:hover {
      color: ${colors.textPrimary};
    }
  }
`;
