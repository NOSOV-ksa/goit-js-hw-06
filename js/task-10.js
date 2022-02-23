function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  creatBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  boxes: document.getElementById('boxes')
};

let firstSizeBox = 30;

refs.boxes.style.width = `${firstSizeBox}px`;
refs.boxes.style.height = `${firstSizeBox}px`;
refs.boxes.style.backgroundcolor = `${getRandomColor()}px`
