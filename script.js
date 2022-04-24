'use strict';

let brandDark = document.querySelector('.header__content_dark');
let headerList = document.querySelector('.headerList');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

headerList.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);