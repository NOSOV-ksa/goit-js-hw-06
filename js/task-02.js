const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');


const item = ingredients.map((el) => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = el;
  return listItem;
});

listIngredients.append(...item)

console.log(listIngredients)