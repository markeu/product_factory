const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.side__nav');


hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('toggle__menu');
    sideNav.classList.toggle('hidenav');
})