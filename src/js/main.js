var menuEl = document.querySelector('.burger-menu');
var btnEl = document.querySelector('.burger-menu__btn-mobile');

function toggleMenu() {
    menuEl.classList.toggle('open');
}

btnEl.onclick = toggleMenu;

/*function logMenuClick() {
    console.log('menu button has clicked');
}

btnEl.addEventListener('click', toggleMenu);
btnEl.addEventListener('dblclick', logMenuClick);

var body = document.body;

body.addEventListener('click', function(event) {
    var isTargetBtn = false;
    
    for (var i = 0; i < btnEl.children.length; i ++) {
        if (btnEl.children[i] == event.target) {
            isTargetBtn = true;
            return;
        }
    }
    
    if (!isTargetBtn) {
        menuEl.classList.remove('open');        
    }
});*/