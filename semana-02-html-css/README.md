# 🎨 Semana 2 — HTML e CSS (Portfólio Pessoal)

Desenvolvimento e publicação do portfólio pessoal multipáginas responsivo utilizando HTML5 semântico e CSS3 puro, referente à segunda semana da Capacitação Desktop da Asimov Jr.

---

## 🔗 Link Publicado (GitHub Pages)

🌐 **Acesse o portfólio online:** [https://brkuro.github.io/capacitacao-asimov--brayan_cosme-/semana-02-html-css/](https://brkuro.github.io/capacitacao-asimov--brayan_cosme-/semana-02-html-css/)

---

## 📌 O que foi feito

- **Estrutura Multipáginas Semântica:** Criação das páginas `index.html` (Home/Sobre), `portfolio.html` (Projetos), `curriculo.html` (Trajetória e Habilidades) e `contato.html` (Canais de contato), utilizando tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Estilização Organizada em Arquivo Único:** Todo o estilo foi centralizado em `css/styles.css` (sem estilos inline), estruturado com **Variáveis CSS (`:root`)** para paleta de cores e tipografia.
- **Layouts Modernos e Responsivos:** Uso combinado de **Flexbox** (barra de navegação, breadcrumb, alinhamento da seção principal e botões) e **CSS Grid** (grade responsiva de projetos e habilidades), adaptados via *Media Queries* para dispositivos móveis e desktop.
- **Acessibilidade em Imagens:** Configuração de foto de perfil personalizada com texto descritivo (`alt`) e ajuste de enquadramento (`object-fit: cover` e `object-position`).
- **Desafios Bônus Concluídos:**
  - 🌗 **Modo Escuro / Modo Claro:** Alternância dinâmica de temas através da manipulação do atributo `data-theme` e variáveis CSS.
  - ✨ **Animações e Transições Sutis:** Animação de entrada (`@keyframes fadeIn`) e transições suaves de elevação (*hover*) em botões e cards.
  - ⚡ **Otimização para Lighthouse:** Estrutura limpa, contraste adequado e metadados para pontuação $\ge 90$ em Performance e Acessibilidade.

---

## 💡 Visão Única (Diferencial)

Como diferencial visual e técnico, integrei um **sistema de alternância de tema (Dark/Light Mode)** controlado por variáveis CSS no elemento raiz, acompanhado de uma paleta personalizada em tons escuros com destaque em laranja (`#f27609`). Além disso, estruturei a página `portfolio.html` com cards dedicados (*dashed border*) que reservam espaço visual para os próximos sistemas que serão construídos ao longo da capacitação.

---

## 🛠️ Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/brkuro/capacitacao-asimov--brayan_cosme-.git
   ```
2. Acesse o diretório da Semana 2:
   ```bash
   cd capacitacao-asimov--brayan_cosme-/semana-02-html-css
   ```
3. Abra o arquivo `index.html` diretamente no navegador ou inicie um servidor local com a extensão **Live Server** no VS Code.

---

## ❓ Dificuldades Encontradas

- **Enquadramento da Imagem de Perfil:** Como a fotografia original estava em formato vertical (retrato), o recorte circular padrão cortava a parte superior. Resolvi ajustando o posicionamento focal diretamente no CSS com `object-position: center 28%`.
- **Evolução de Código Legado para Semântico:** Refatorar a estrutura base multipáginas que utilizava apenas tags `<div>` genéricas para elementos semânticos do HTML5, garantindo consistência de layout e responsividade em todas as 4 páginas.