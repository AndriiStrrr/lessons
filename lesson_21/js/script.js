"use strict";

// об'ява змінної
let userName = "Taras";
console.log(userName);

// викорситання змінної
userName;
console.log(userName);

// зміна значення
userName = `Jon`;
console.log(userName);

// динамічна типізація
userName = 911;
console.log(userName);

// копіювання значення

userName;
let userAge = userName;
console.log(userAge);

// константи
const userInfo = `married`;
console.log(userInfo);

// типи данних
/*
undefined - невизначено
null - відсутність чогось, пустота
number - число
string - рядок
boolean - правда або брехня
object - 
*/
// Оператор typeof вертає тип даних

// Boolean true or false
let someVar = NaN;
console.log(someVar);
console.log(typeof someVar);
console.log(typeof Boolean(someVar));
console.log(Boolean(someVar));

// пошук та зміна рядків (replace)

let someString = `#Hello, world`;
someString = someString.replace("#", "");
console.log(someString);

let varOne = 20;
let varTwo = "20";
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
