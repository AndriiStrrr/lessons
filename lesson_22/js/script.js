"use strict";
const numOne = 40;
const numTwo = 20;
// // Завдання 1
/*
let someVar = 0;
 ++someVar;
 if (someVar) {
   console.log(someVar);
 }
*/
// ================================================================

// Завдання 2

for (let i = 0; i <= 10; ++i) {
  console.log(`Пункт №${i}`);
}

// Задача 3

if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  console.log(`000`);
}

// ================================================================

// Задача 4

function varRes(a = 0, b = 0) {
  return a / b;
}
function showMessage(someText = "Вкажіть параметри") {
  console.log(someText);
}
// showMessage(`Результат ділення: ${varRes(2, 2)}`);
// showMessage(`Результат ділення: ${varRes(1, 1)}`);
// showMessage(`Результат ділення: ${varRes(50, 2)}`);
// showMessage(`Результат ділення: ${varRes(50, 80)}`);
// showMessage(`Результат ділення:`);
// showMessage();

// ================================================================

// Задача 5
let someArray = ["infinite", "Opel", "BMW", "SUBARU", 10];
console.log(Array.isArray(someArray));

someArray.forEach((item, index) => {
  console.log(item);
});

console.log(someArray.includes(10));

if (someArray.includes(10)) {
  console.log(someArray);
}

// ================================================================

// =========ПРАКТИКА==========

// let result = !0;
// console.log(result);
/*
let result = 1 || 5;
console.log(result);

let resultTwo = 1 && "";
console.log(Boolean(resultTwo));
console.log(resultTwo);
*/

/*
function varRes(a = 0, b = 0) {
  console.log(a / b);
}

varRes(20, 10);
*/

/*
function varRes(a, b) {
  const fraction = a / b;
  console.log(`Результат ділення: ${fraction}`);
}

varRes(numOne, numTwo);
*/

/*
function varRes(a = 0, b = 0) {
  return a / b;
}

function showMessage(someText = "Вкажіть параметри") {
  console.log(someText);
}
showMessage(`Результат ділення: ${varRes(2, 2)}`);
*/
/*
let someName = ["mazda", "Opel", "Mersedes"];
console.log(Array.isArray(someName));

let someNameStr = someName.join(`, `);
console.log(someNameStr);

let someArr = [40, 20, 35];
someArr.push(200);
console.log(someArr);
*/
/*
let varOne = 10;
let varTwo = 12;

if (varOne > varTwo) {
  let result = varOne + varTwo;
  console.log(result);
} else if (varOne === 10) {
  console.log(varOne);
} else {
  console.log("else");
}
*/
