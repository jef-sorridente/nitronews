import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#111827",
  secundary: "#1d2432",
  textPrimary: "#fff",
  textSecundary: "#9ca3af",
  border: "#343a47",
  outline: "#6366f1",
  error: "#dc3545",
};

export const breakpoinst = {
  desktop: "1024px",
  tablet: "768px",
};

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body {
       background-color: ${colors.primary};
       color: ${colors.textPrimary};
     
    }

`;
