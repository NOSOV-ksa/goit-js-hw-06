const validationInput = document.getElementById('validation-input');
const dataLength = document.querySelector('[data-length]');


validationInput.addEventListener('blur', onInputText);

function onInputText(evt) {
    validationInput.classList.add('invalid');
    if (evt.currentTarget.value.length === Number(dataLength.dataset.length)) {
        validationInput.classList.replace('invalid', 'valid')
    }
}

// console.log(Number(dataLength.dataset.length));
