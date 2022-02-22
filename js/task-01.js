const listElement = document.querySelectorAll('.item');

console.log('Number of categories: ', listElement.length);

listElement.forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);

    console.log('Elements: ', element.querySelectorAll('li').length)
});
