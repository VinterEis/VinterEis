const menu_icon = document.querySelector('.nav-icon');
const change = document.querySelector('ul.nav-menu')

menu_icon.addEventListener('click', e => {
    if(change.getAttribute('class') == 'nav-menu'){
        change.setAttribute('class', 'nav-clicked')
    } else {
        change.setAttribute('class', 'nav-menu')
    }
});