const nav = document.querySelector('nav');
const botaoHamburguer = document.querySelector('.botao-hamburguer');

function setStyle(element, prop, value) {
    element.style[prop] = value;
}

botaoHamburguer.addEventListener('click', () => {
    const navState = nav.style.display;

    if (navState === 'none' || navState === '') {
        setStyle(nav, 'display', 'flex');
    } else {
        setStyle(nav, 'display', 'none');
    }
})