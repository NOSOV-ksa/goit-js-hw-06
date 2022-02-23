const fontSizeControl = document.getElementById('font-size-control');
const variableText = document.getElementById('text');

variableText.style.fontSize = fontSizeControl.value;

fontSizeControl.addEventListener('input', event => {
    variableText.style.fontSize = `${event.currentTarget.value}px`
})


console.log(variableText)