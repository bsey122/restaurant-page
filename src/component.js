// Factoty function to create and display html elements
const component = function (element, parentElement, textContent, elementClass, imgSrc) {
    function render() {
        const el = document.createElement(element);
        el.textContent = textContent;
        if (elementClass !== undefined) {
            el.classList.add(elementClass);
        }
        const parentEl = document.querySelector(parentElement);
        parentEl.appendChild(el);
    }

    function renderImg() {
        const img = new Image();
        img.src = imgSrc;
        console.log(imgSrc);
        const el = document.createElement(element);
        const parentEl = document.querySelector(parentElement);
        if (elementClass !== undefined) {
            el.classList.add(elementClass);
        }
        el.appendChild(img);
        parentEl.appendChild(el);
    }
    
    return {render, renderImg};
}

export default component;