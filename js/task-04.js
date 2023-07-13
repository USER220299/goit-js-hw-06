const counter = document.querySelector('#counter');
const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;
let value = counter.querySelector('#value');
console.log(decrement);
console.log(increment);
console.log(value);

const counterValue =0;
console.log(counterValue);

decrement.addEventListener('click', getNegativeNumber)
function getNegativeNumber() {
   
  value.textContent -=   1 ;
   
 

}
increment.addEventListener('click', getPositiveNumber)
function getPositiveNumber() {
   
   value.textContent  +=  1 ;
}




// decrement.addEventListener('click',  ()=> {
//     // console.log('Добавлен слушатель события -1')
//     counterValue.textContent -= 1

// }) 
// console.log(counterValue);

// increment.addEventListener('click',  ()=> {
//     console.log('Добавлен слушатель события +1');
//     return counterValue.textContent += 1;



// }) 
// console.log(counterValue);
