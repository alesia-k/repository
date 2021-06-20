var menuEl = document.querySelector('.burger-menu__list');
var btnEl = document.querySelector('.burger-menu__btn-mobile');

function toggleMenu() {
    menuEl.classList.toggle('open');
}

btnEl.addEventListener('click',toggleMenu);