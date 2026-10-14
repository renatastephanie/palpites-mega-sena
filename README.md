# Sorteador Mega Sena

Um gerador de palpites para a **Mega Sena** desenvolvido com HTML, CSS (SCSS) e JavaScript puro. Sorteia combinações aleatórias de 6 números entre 1 e 60, exibe o histórico de jogos e anima os resultados na tela.

---

## Preview

> _Adicione aqui um screenshot da aplicação._

---

## Funcionalidades

- 🎯 Sorteio de múltiplos jogos em uma única rodada
- 🕐 Exibição sequencial dos jogos com intervalo de 1 segundo entre cada um
- 📋 Histórico de palpites com o mais recente sempre no topo
- 🧹 Botão para limpar os números e resetar o histórico
- 🎨 Interface com tema escuro e animações suaves
- 📱 Layout responsivo para dispositivos móveis

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura da página |
| SCSS / CSS3 | Estilização com variáveis, animações e responsividade |
| JavaScript (ES6+) | Lógica de sorteio, manipulação do DOM e async/await |

---

## 📁 Estrutura do Projeto

```
palpites-mega-sena/
├── index.html        # Estrutura principal da aplicação
├── style.scss        # Estilos em SCSS (fonte dos estilos)
├── style.css         # CSS compilado a partir do SCSS
├── style.css.map     # Source map do CSS
└── js/
    └── main.js       # Lógica JavaScript da aplicação
```

---

## Como Usar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no seu navegador
3. Clique em **"Sortear Números"** e informe quantos jogos deseja gerar
4. Acompanhe os palpites sendo exibidos um a um
5. Clique em **"Limpar"** para resetar tudo

> ⚠️ Os números são gerados de forma **aleatória** e **não garantem premiação**.

---

## 💻 Desenvolvimento

Para editar os estilos, modifique o arquivo `style.scss` e compile-o para `style.css` utilizando um compilador SCSS de sua preferência:

```bash
# Exemplo com sass via npm
npx sass style.scss style.css --watch
```

---

Desenvolvido por **Renata Stephanie**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/renata-stephanie/)

[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/874828318845857813)
