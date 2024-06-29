"use strict";
const numOne = 40;
const numTwo = 20;
// // Завдання 1
/*
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
*/
// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });
// ================================================================

// Завдання 2
/*Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/

window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
  document.body.classList.add("loaded");
}
// ================================================================

// Задача 3
/*
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.

*/
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.addEventListener("mouseenter", () => {
  footer.style.backgroundColor = "red";
});

header.addEventListener("mouseleave", () => {
  footer.style.backgroundColor = "initial";
});
// ================================================================

// Задача 4
/*
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/
const someBlock = document.querySelector(`.animate-block`);

const animateItem = document.querySelector(".animate-block__item");

const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  treshold: 0.5,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateItem.classList.add("animate");
      let i = 1;
      let timer = setInterval(() => {
        console.log(i);
        i === 5 ? clearInterval(timer) : ++i;
        animateItem.innerHTML = `Timer:${i}`;
      }, 1000);
    } else {
      animateItem.classList.remove(`animate`);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(someBlock);

// ================================================================
