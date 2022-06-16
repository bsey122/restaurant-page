import component from "./component";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import './styles.css';

const index = (function () {
    const restaurantName = 'Pizza';
    const header = component('header', '#content', '', 'header');
    const h1Header = component('h1', '.header', restaurantName);
    const nav = component('nav', '.header', '', 'navigation');
    const navHomeButton = component('button', '.navigation', 'Home', 'home-button');
    const navMenuButton = component('button', '.navigation', 'Menu', 'menu-button');
    const navContactButton = component('button', '.navigation', 'Contact', 'contact-button');

    const container = document.querySelector('#content');

    header.render();
    h1Header.render();
    nav.render();
    navHomeButton.render();
    navMenuButton.render();
    navContactButton.render();
    home.render();

    const homeButton = document.querySelector('.home-button');
    const menuButton = document.querySelector('.menu-button');
    const contactButton = document.querySelector('.contact-button');

    homeButton.classList.add('active');

    const menuButtonOnHome = document.querySelector('.home-menu-button');

    homeButton.addEventListener('click', renderHome);
    menuButton.addEventListener('click', renderMenu);
    menuButtonOnHome.addEventListener('click', renderMenu);
    contactButton.addEventListener('click', renderContact);

    function renderHome() {
        const menuContainer = document.querySelector('.menu-container');
        const contactContainer = document.querySelector('.contact-container');
        if (container.classList.contains('menu')) {
            container.removeChild(menuContainer);
            container.classList.remove('menu');
            home.render();
            const menuButtonOnHome = document.querySelector('.home-menu-button');
            menuButtonOnHome.addEventListener('click', renderMenu);
            menuButton.classList.remove('active');
            homeButton.classList.add('active');
        } else if (container.classList.contains('contact')) {
            container.removeChild(contactContainer);
            container.classList.remove('contact');
            home.render();
            const menuButtonOnHome = document.querySelector('.home-menu-button');
            menuButtonOnHome.addEventListener('click', renderMenu);
            contactButton.classList.remove('active');
            homeButton.classList.add('active');
        }
    }

    function renderMenu() {
        const homeContainer = document.querySelector('.home-container');
        const contactContainer = document.querySelector('.contact-container');
        if (container.classList.contains('home')) {
            container.removeChild(homeContainer);
            container.classList.remove('home');
            menu.render();
            homeButton.classList.remove('active');
            menuButton.classList.add('active');
        } else if (container.classList.contains('contact')) {
            container.removeChild(contactContainer);
            container.classList.remove('contact');
            menu.render();
            contactButton.classList.remove('active');
            menuButton.classList.add('active');
        }
    }

    function renderContact() {
        const homeContainer = document.querySelector('.home-container');
        const menuContainer = document.querySelector('.menu-container');
        if (container.classList.contains('home')) {
            container.removeChild(homeContainer);
            container.classList.remove('home');
            contact.render();
            homeButton.classList.remove('active');
            contactButton.classList.add('active');
        } else if (container.classList.contains('menu')) {
            container.removeChild(menuContainer);
            container.classList.remove('menu');
            contact.render();
            menuButton.classList.remove('active');
            contactButton.classList.add('active');
        }
    }

})();