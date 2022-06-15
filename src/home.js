import component from "./component";

const home = (function () {
    const headlineText = 'Some filler text about our amazing pizza';
    const subheadingText = 'A little less text';
    const menuButtonText = 'Menu';
    const container = document.querySelector('#content');

    const headline = component('h2', '.home', headlineText, 'home-headline');
    const subheading = component('p', '.home', subheadingText, 'home-subheading');
    const menuButton = component('button', '.home', menuButtonText, 'home-menu-button');

    function render() {
        container.classList.add('home');
        headline.render();
        subheading.render();
        menuButton.render();
    }
    return {headline, subheading, menuButton, render};
})();

export default home;