import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation} from 'swiper';

const swiper1 = new Swiper();

var swiper = new Swiper(".products__swiper", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoints:{
    1200:{
      slidesPerView: 'auto',
      spaceBetween: 37,
      initialSlide: 2,
      centeredSlides: true,
    },
  },
});

const menu = document.querySelector('.menu');
const headerRight = document.querySelector('.header__right');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    body.classList.toggle('hidden')
    headerRight.classList.toggle('active') 
})