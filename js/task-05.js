const inputText = document.getElementById('name-input');
const outputText = document.getElementById('name-output');

const onInputText = (ev) => {
    outputText.textContent = 'Anonymous';
    if (ev.currentTarget.value !=="") {
        outputText.textContent = ev.currentTarget.value;
    }
};

inputText.addEventListener('input', onInputText);