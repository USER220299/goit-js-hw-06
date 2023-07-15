function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const controls = document.querySelector('#controls');

console.log(controls);

const btnCreate = document.querySelector('[data-create]');
console.log(btnCreate);

btnCreate.addEventListener('click', createBoxes)