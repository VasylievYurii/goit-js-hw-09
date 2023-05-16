const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

startBtn.addEventListener('click', changeColorTheme);
stopBtn.addEventListener('click', stopColorTheme);
stopBtn.classList.add('noActive');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColorTheme() {
  stopBtn.classList.remove('noActive');
  startBtn.classList.add('noActive');

  bodyRef.style.backgroundColor = getRandomHexColor();

  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', 'disabled');
}

function stopColorTheme() {
    bodyRef.style.backgroundColor = '#fafafa';

    stopBtn.classList.add('noActive');
    startBtn.classList.remove('noActive');

    stopBtn.setAttribute('disabled', 'disabled');
    startBtn.removeAttribute('disabled');
}
