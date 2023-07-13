const input = document.querySelector('#validation-input');
const data = input.querySelector('[data-length]');
// console.log(input);
// console.log(data)
const result = Number(input.getAttribute('data-length'));

input.addEventListener('blur', getBorderColor);

function getBorderColor(event) {
    if (event.target.value.length === result) {
     input.classList.add('valid');
    } else {
       input.classList.add('invalid');
    }
    

}