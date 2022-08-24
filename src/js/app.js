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

const button = document.querySelectorAll('.tasks__item-button');
const content = document.querySelectorAll('.tasks__item-content');
const item = document.querySelectorAll('.tasks__item');
const itemClose = document.querySelector('.close-bg');

button.forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    item.forEach(tasksItem=>{
      tasksItem.classList.remove('active')
      itemClose.classList.remove('active')
    })
    btn.classList.toggle('active')
    btn.parentElement.classList.toggle('active')
    itemClose.classList.toggle('active')
  })
})
itemClose.addEventListener('click',(e)=>{
  item.forEach(tasksItem=>{
    tasksItem.classList.remove('active')
    itemClose.classList.remove('active')
  })
  btn.classList.remove('active')
  btn.parentElement.classList.remove('active')
  itemClose.classList.remove('active')
})

const checkbox = document.querySelectorAll('.filter__checkboxes-input');
const price = document.querySelectorAll('.tasks__item-price');

checkbox.forEach(input =>{
  input.addEventListener('click', (e)=>{
    input.parentElement.classList.toggle('active')
  })
})
