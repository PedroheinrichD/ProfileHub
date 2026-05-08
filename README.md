# Profile Hub

Aplicação web para busca de perfis do GitHub utilizando a API pública do GitHub.

O projeto realiza requisições assíncronas para a API REST do GitHub, manipula os dados recebidos e exibe informações relevantes do usuário de forma dinâmica e organizada.

---

## Preview

<img width="1278" height="818" alt="Image" src="https://github.com/user-attachments/assets/25326034-5a32-446d-826c-ed8a180b2e4f" />
Link do Projeto: https://pedroheinrichd.github.io/ProfileHub/

---

## Funcionalidades

- Buscar perfis públicos do GitHub
- Exibir:
  - Nome do usuário
  - Username (@)
  - Bio do perfil
  - Seguidores
  - Seguindo
  - Repositórios públicos
  - Gists públicos
- Listagem dos principais repositórios
- Redirecionamento para os repositórios
- Link direto para o perfil do GitHub
- Modal informativo sobre o projeto
- Interface responsiva

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub REST API

---

## Destaques técnicos

### Consumo de API REST

O projeto utiliza requisições assíncronas para buscar dados públicos diretamente da API do GitHub.

Exemplo da requisição:

```javascript
const response = await fetch(`https://api.github.com/users/${username}`);
const data = await response.json();
```

---

### Manipulação de dados

Após receber os dados da API, a aplicação realiza:

- Extração de informações relevantes
- Atualização dinâmica da interface
- Renderização de listas de repositórios
- Tratamento visual dos dados recebidos

---

### Interface dinâmica

A interface é atualizada em tempo real conforme o usuário realiza buscas, proporcionando uma experiência mais fluida e interativa.

---

## Objetivo do projeto

O objetivo do projeto foi praticar:

- Consumo de APIs REST
- Manipulação de dados JSON
- Programação assíncrona com JavaScript
- Manipulação do DOM
- Estruturação de interfaces modernas

---

## Autor

Pedro Heinrich

GitHub:
https://github.com/PedroheinrichD
