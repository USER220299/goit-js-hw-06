const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('ul')

ingredients.forEach((ingredient) => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  element.classList.add('item')
  ulEl.appendChild(element);
});
