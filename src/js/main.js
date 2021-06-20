var menuEl = document.querySelector('.burger-menu');
var btnEl = document.querySelector('.burger-menu__btn-mobile');

function toggleMenu() {
    menuEl.classList.toggle('open');
}

btnEl.onclick = toggleMenu;