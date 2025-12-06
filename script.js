const lightModeBtn = document.getElementById('light-mode-btn');
const pinkModeBtn = document.getElementById('pink-mode-btn');
const highContrastModeBtn = document.getElementById('high-contrast-mode-btn');
const defaultModeBtn = document.getElementById('default-mode-btn');
const body = document.body;

const themeClasses = ['light-mode', 'pink-mode', 'high-contrast'];

function setTheme(theme) {
  themeClasses.forEach(cls => body.classList.remove(cls));
  if (theme) {
    body.classList.add(theme);
  }
}

lightModeBtn.addEventListener('click', () => setTheme('light-mode'));
pinkModeBtn.addEventListener('click', () => setTheme('pink-mode'));
highContrastModeBtn.addEventListener('click', () => setTheme('high-contrast'));
defaultModeBtn.addEventListener('click', () => setTheme(null));
