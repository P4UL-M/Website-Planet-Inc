const nav = document.getElementById('nav');
const body = document.body;

function navOpen() {
    nav.classList.add('active');
    body.classList.add('scroll-lock');
}

function navClose() {
    nav.classList.remove('active');
    body.classList.remove('scroll-lock');
}