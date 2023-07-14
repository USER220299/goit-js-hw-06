const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(input);
console.log(text.textContent);

input.addEventListener('click', getSizeText)


function getSizeText(event) {
   
 console.log(event.target.value );
}
   

