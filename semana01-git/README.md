# 📍 Semana 1 — Git e GitHub

Este diretório contém a documentação, registros e estrutura referentes à primeira semana de capacitação da área de Desktop da Asimov Jr.

---

## 📌 O que foi feito

- Configuração e estruturação do repositório público `capacitacao-asimov-brayan`.
- Elaboração do `README.md` principal contendo o currículo online e o cronograma interativo da capacitação.
- Implementação de regras de ignore com o `.gitignore`.
- Prática do fluxo de trabalho por branches (`semana01-git` e `feature/adiciona-bio-conflito`).
- Simulação, identificação e resolução intencional de um conflito de merge.
- Versionamento padronizado utilizando **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, `chore:`).

---

## 🔀 Resolução do Conflito de Merge

Para atender aos requisitos técnicos da entrega:
1. Foi criada a branch `feature/adiciona-bio-conflito` onde o arquivo `semana01-git/conflito.md` recebeu um conteúdo referente à versão A.
2. Na branch `semana01-git`, o mesmo arquivo foi alterado na mesma linha com a versão B.
3. Ao executar `git merge feature/adiciona-bio-conflito`, o Git sinalizou o conflito de *add/add*.
4. **Solução:** O arquivo foi aberto no VS Code, as marcas de conflito (`<<<<<<<`, `=======`, `>>>>>>>`) foram removidas mantendo a versão combinada correta, e o commit de resolução foi realizado com `fix: resolve conflito de merge no arquivo conflito.md`.

---

## 💡 Visão Única (Diferencial)

Como diferencial para o perfil e repositório, foi incorporado um **cronograma visual centralizado com status interativo** e a customização estilizada do currículo online para visualização no GitHub e na extensão *Markdown Preview Enhanced*.

---

## 🛠️ Como Visualizar

Para clonar e inspecionar o repositório localmente:

```bash
git clone https://github.com/brkuro/capacitacao-asimov--brayan_cosme-.git
cd capacitacao-asimov-brayan