const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
let spanValue = span.textContent;

input.addEventListener('input', getName);

function getName(event) {
   
    if (event.target.value  === '') {
      span.textContent= spanValue;
    } else {
        span.textContent = event.target.value 
    }
 
    
}