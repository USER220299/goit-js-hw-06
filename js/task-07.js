const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(input);
console.log(text.style.fontSize);

input.addEventListener('input', getSizeText)


function getSizeText(event) {
    const textFontSize = event.target.value + 'px';
   text.style.fontSize= textFontSize;
};
   

