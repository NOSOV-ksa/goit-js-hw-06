const counterBtn = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    valueElement: document.getElementById('value')
}

const counter = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    },
};

counterBtn.decrementBtn.addEventListener('click', onClickBtnDecrement);
counterBtn.incrementBtn.addEventListener('click', onClickBtnIncrement);

function onClickBtnDecrement() {
    counter.decrement();
    counterBtn.valueElement.textContent = counter.value;
    console.log('клик по Decrement', counter)
};

function onClickBtnIncrement() {
    counter.increment();
    counterBtn.valueElement.textContent = counter.value;
    console.log('клик по Increnment', counter)
}