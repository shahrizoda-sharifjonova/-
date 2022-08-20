import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

var Swiper = new Swiper(".products__swiper", {
  slidesPerView: 3,
  spaceBetween: 37,
});

const menu = document.querySelector('.menu');
const headerRight = document.querySelector('.header__right');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
    headerRight.classList.toggle('active')
})