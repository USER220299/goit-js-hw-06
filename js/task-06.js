const input = document.querySelector('#validation-input');
const result = Number(input.getAttribute('data-length'));

input.addEventListener('blur', getBorderColor);

function getBorderColor(event) {
    

    if ((event.target.value.length) === result) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
};