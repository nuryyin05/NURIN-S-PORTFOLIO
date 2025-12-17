// ===== DARK MODE LOGIC =====
const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;
const lightBg = document.getElementById('lightBg');
const darkBg = document.getElementById('darkBg');

// Load last mode from localStorage
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'true') {
  body.classList.add('dark-mode');
  lightBg.style.display = 'none';
  darkBg.style.display = 'block';
} else {
  body.classList.remove('dark-mode');
  lightBg.style.display = 'block';
  darkBg.style.display = 'none';
}

// Toggle button
darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark); // save mode

  if (isDark) {
    lightBg.style.display = 'none';
    darkBg.style.display = 'block';
  } else {
    lightBg.style.display = 'block';
    darkBg.style.display = 'none';
  }
});
