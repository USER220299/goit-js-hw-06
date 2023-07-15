const categories = document.querySelector('#categories');
const itemEl = categories.querySelectorAll('.item');
const result = `Number of categories: ${itemEl.length}`;
console.log(result);

itemEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${(item.lastElementChild).children.length}`)

})

