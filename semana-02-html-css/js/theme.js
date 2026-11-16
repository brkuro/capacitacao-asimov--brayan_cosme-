const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

// 1. Verifica se já existe um tema salvo no navegador (padrão: 'dark')
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  // 2. Alterna o tema ao clicar e salva no localStorage
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
}