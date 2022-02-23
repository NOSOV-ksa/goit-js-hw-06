function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  valueColor: document.querySelector('.color'),
  backgroundColor: document.querySelector('body'),
  btnChangeColor: document.querySelector('.cange-color')
};

refs.btnChangeColor.addEventListener('click', getRandomHexColor)