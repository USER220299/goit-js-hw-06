const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('ul');


 const liEl = ingredients.map((ingredient) => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
 return element
});


  ulEl.append(...liEl);