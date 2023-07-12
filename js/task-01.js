const categories = document.querySelector('#categories');
const itemEl = categories.querySelectorAll('.item');
const result = `Number of categories: ${itemEl.length}`;
console.log(result);

itemEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${(item.lastElementChild).children.length}`)

})



// const categories = document.querySelector('#categories')
// const itemEl= categories.querySelectorAll('.item')
// let sum = 0;
// let category;


// itemEl.forEach((item, i) => {
//     sum += i;
// });

// let resultSum = `Number of categories: ${sum}`
// console.log(resultSum);



// itemEl.forEach((item, i) => {
//     category = item.child;
    
// });
// console.log(category)




// let resultCategory = `Category: ${category}`
// console.log(resultCategory);


// itemEl.forEach((item, i) => {
//     console.log('Category:', item.firstElementChild.textContent);
//     category = item.lastElementChild;
  

// });


// console.log(category);
// console.log(number)