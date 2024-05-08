const menuItems = [
    { name: 'Cheeseburger', price: '$5.99', image: 'cheeseburger.jpg' },
    { name: 'Caesar Salad', price: '$7.99', image: 'salad.jpg' },
    { name: 'Smoothie', price: '$3.49', image: 'smoothie.jpg' },
    { name: 'Pizza', price: '$10.99', image: 'pizza.jpg' },
    { name: 'Fried Chicken (4 pcs)', price: '$9.99', image: 'fried-chicken.jpg' },


    
];

const menuElement = document.getElementById('menu');

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = `images/${item.image}`;
    image.alt = item.name;
    menuItem.appendChild(image);

    const heading = document.createElement('h2');
    heading.textContent = item.name;
    menuItem.appendChild(heading);

    const price = document.createElement('p');
    price.textContent = `Price: ${item.price}`;
    menuItem.appendChild(price);

    menuElement.appendChild(menuItem);
});