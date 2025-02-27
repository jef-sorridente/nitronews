# Teste Técnico - Nitronews

Repositório de uma aplicação para cadastro de usuários:

- Uma implementação usando **React**.

### Implementação com React

- **React**: Biblioteca para construção da interface.
- **yup**: Biblioteca para validação de esquema.
- **formik**: Biblioteca para gerenciamento de formulários.
- **react-icons**: Conjunto de ícones para React.
- **styled-components**: Biblioteca para estilização de componentes.
- **@react-spring/web**: Biblioteca para animações.

## Objetivo

Foi realizado o desenvolvimento de uma mini-aplicação que interage com um backend rodando em Docker através de requisições HTTP.

## Funcionalidades

A aplicação possui um formulário de cadastro com os seguintes campos:

- **Nome**
- **Email**
- **Senha**
- **Confirmação de senha**

### Regras de Validação

- **Nome**: Obrigatório
- **Email**: Obrigatório; Deve ser um e-mail válido
- **Senha**: Obrigatório; Mínimo de 8 caracteres; Deve conter pelo menos 1 caractere minúsculo, 1 caractere maiúsculo e 1 numeral
- **Confirmação de Senha**: Obrigatório; Deve ser idêntico ao campo **Senha**

### Erros de Validação

- Emails indisponíveis para cadastro:
  - teste@exemplo.com
  - joao@exemplo.com
  - maria@acme.net
