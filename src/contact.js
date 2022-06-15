import component from "./component";

const contact = (function () {
    const _contactHeaderText = 'Contact';
    const _contactPhoneText = 'Call us: (123) 456 789';
    const _contactAddressText = 'Location: 123 Fake Street, Yorknew City, USA';
    const _contactHeadlineText = 'Come on in and try some of our world famous pizza!';
    const _contactEmailText = 'Email: restaurant@pizza.com';

    const _container = document.querySelector('#content');

    const contactContainer = component('div', '.contact', '', 'contact-container');
    const contactHeader = component('h2', '.contact-container', _contactHeaderText, 'contact-header');
    const contactPhone = component('p', '.contact-container', _contactPhoneText);
    const contactAddress = component('p', '.contact-container', _contactAddressText);
    const contactHeadline = component('p', '.contact-container', _contactHeadlineText);
    const contactEmail = component('p', '.contact-container', _contactEmailText);

    function render() {
        _container.classList.add('contact');
        contactContainer.render();
        contactHeader.render();
        contactHeadline.render();
        contactPhone.render();
        contactAddress.render();
        contactEmail.render();
    }

    return {
        contactContainer,
        contactHeader,
        contactPhone,
        contactAddress,
        contactHeadline,
        contactEmail,
        render,
    }
})();

export default contact;