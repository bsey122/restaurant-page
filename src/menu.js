import component from "./component";

const menu = (function () {
    // Array of objects to hold menu information
    const _menuItems = [{
        name: 'Margherita',
        description: 'San Marzano tomato sauce, Fior di latte cheese, fresh basil',
        price: '$12',
    },
    {
        name: 'Salami',
        description: 'San Marzano tomato sauce, Fior di latte cheese, Salami',
        price: '$12',
    },
    {
        name: 'Capricciosa',
        description: 'San Marzano tomato sauce, Fior di latte cheese, Prosciutto cotto, Black olives, Artichokes, Mushrooms',
        price: '$12',
    },
    {
        name: 'Salsiccia',
        description: 'San Marzano tomato sauce, Fior di latte cheese, Sausage, Rapini',
        price: '$12',
    },
    {
        name: 'Patata',
        description: 'Potatoes, Fior di latte cheese, Pancetta, Caramelized onions',
        price: '$12',
    },];

    const _menuHeadingText = 'What\'s on the menu?';

    const _container = document.querySelector('#content');
    _container.classList.add('menu');

    const menuContainer = component('div', '.menu', '','menu-container');
    const menuHeading = component('h2', '.menu-container', _menuHeadingText, 'menu-head-title');

    // Method to loop through _menuItems array and render the content on screen
    function createMenu() {
        for (let i = 0; i < _menuItems.length; i++) {
            const object = _menuItems[i];
            const menuItem = component('div', '.menu-container', '', 'menu-item');
            menuItem.render();
            const menuHeader = component('div', `.menu-item:nth-child(${i + 2})`, '', 'menu-header');
            menuHeader.render();
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    const value = object[key];
                    if (key === 'name') {
                        const menuTitle = component('h3', `.menu-item:nth-child(${i + 2}) > .menu-header`, value, 'menu-title');
                        menuTitle.render();
                    } else if (key === 'price') {
                        const menuPrice = component('h3', `.menu-item:nth-child(${i + 2}) > .menu-header`, value, 'menu-price');
                        menuPrice.render();
                    } else if (key === 'description') {
                        const menuDescription = component('p', `.menu-item:nth-child(${i + 2})`, value, 'menu-description');
                        menuDescription.render();
                    }
                }
            }
        }
    }

    function render() {
        menuContainer.render();
        menuHeading.render();
        createMenu();
    }
    return {
        menuContainer,
        menuHeading,
        createMenu,
        render,
    };
})();

export default menu;