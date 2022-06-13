import component from "./component";

const home = (function () {
    const headlineText = 'Some filler text about our amazing pizza';
    const subheadingText = 'A little less text';
    const menuButtonText = 'Menu';
    const container = document.querySelector('#content');
    container.classList.add('home');

    const headline = component('h2', '.home', headlineText, 'home-headline');
    const subheading = component('p', '.home', subheadingText, 'home-subheading');
    const menuButton = component('button', '.home', menuButtonText, 'home-menu-button');
    return {headline, subheading, menuButton};
})();

export default home;