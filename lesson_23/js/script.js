"use strict";
const numOne = 40;
const numTwo = 20;
// // Завдання 1
// Отримати в константу елемент <body>
const bodyElement = document.body;
console.log(bodyElement);
// ================================================================

// Завдання 2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
function addListToBody(numItems = 3) {
  const list = document.createElement("ul");
  for (let i = 1; i <= numItems; ++i) {
    const item = document.createElement("li");
    item.textContent = `item`;
    list.prepend(item);
  }
  document.body.prepend(list);
}
addListToBody();
// addListToBody(8);
// ================================================================

// Задача 3
/*
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тексту зедлений.
*/
bodyElement.classList.add(`loaded`);

if (bodyElement.classList.contains(`loaded`)) {
  bodyElement.style.color = `green`;
}
// ================================================================

// Задача 4
/*
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/
let items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  item.classList.add("active");
  item.textContent = `Елемент №${index + 1}`;
});
// ================================================================

// Задача 5
/*
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/
const button = document.querySelector(".button");
button.scrollIntoView({
  block: "center",
  inline: "nearest",
  behavior: "smooth",
});

// ================================================================

// Задача 6
/*
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення атрибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
  */
let link = document.querySelector(".link");
link.dataset.Value = `100`;

const Value = +link.dataset.Value;

if (Value < 200) {
  link.style.color = `red`;
}
// ================================================================
