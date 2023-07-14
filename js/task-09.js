const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorName = document.querySelector('.color');


button.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
   body.style.backgroundColor = color;
   colorName.textContent =color;
}