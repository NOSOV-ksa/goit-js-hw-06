function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

};

function onActionBtn() {
  const getRandomValue = getRandomHexColor;
  refs.valueColor.textContent = getRandomValue();
  refs.backgroundColor.style.backgroundColor = getRandomValue();
}


const refs = {
  valueColor: document.querySelector('.color'),
  backgroundColor: document.querySelector('body'),
  btnChangeColor: document.querySelector('.change-color')
};

refs.btnChangeColor.addEventListener('click', onActionBtn)