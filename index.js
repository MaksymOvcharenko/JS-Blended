/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */
// const answer = prompt("Яка офіційна назва JavaScript?");
// console.log(answer);
// function answerCheck(string) {
//   if (string === "ECMAScript") {
//     alert("Вірно!");
//   } else {
//     alert("Не знаєте? ECMAScript!");
//   }
// }
// answerCheck(answer);

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

// const time = +prompt("Введіть кількість хвилин:");
// console.log(time);
// function convertTime(number) {
//   const hours = String(Math.floor(number / 60)).padStart(2, 0);
//   console.log(hours);
//   const minutes = String(number % 60).padStart(2, 0);
//   console.log(minutes);
//   console.log(`${hours}:${minutes}`);
// }
// convertTime(time);

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі непарні числа  від max до min  за спаданням
 */
// const a = 50;
// const b = 23;
// function sowNamber(max, min) {
//   for (let i = max; i >= min; i--) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }
// sowNamber(a, b);

/**
 *? За допомогою циклу for складіть усі парні числа від min до max
 */

// const max = 50;
// const min = 0;

// function culcTotal(max, min) {
//   let total = 0;
//   for (let i = min; i <= max; i++) {
//     if (!(i % 2)) {
//       total += i;
//     }
//   }
//   return total;
// }
// const result = culcTotal(max, min);
// console.log(result);

/**
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */
// const min = 11;
// function partNumber(number) {
//     if (number > 0 && number <= 15) {
//         console.log ("first part")
//     } else if (number > 15 && number <= 30) {
//         console.log ("second part")
//     }
//     else if (number > 30 && number <= 45) {
//         console.log ("third part")
//     }
//     else {
//         console.log ("fourth part")
//     }
// }
// partNumber(min);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };
// function culcTotalSalary(obj) {
//   let sum = 0;
//   const valeus = Object.values(obj);
//   for (const item of valeus) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(culcTotalSalary(someObj));
/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */
// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];
// function calcTotalPrice(someStones, stoneName) {
//   for (let key of stones) {
//     if (key.name === stoneName) {
//       return key.price * key.quantity;
//     }
//   }
// }
// console.log(calcTotalPrice(stones, "Изумруд"));

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
// const fruits = [
//     { name: "apple", price: 200 },
//     { name: "orange", price: 300 },
//     { name: "grapes", price: 750 },
// ];

// function updateFruits(array) {
//     let newArr = [];
//     let id = 1;

//     for (const item of array) {
//         const newFruit = { ...item, price: item.price * 0.8, id }
//         newArr.push(newFruit);
//         id += 1;

//     }

//     return newArr;
// }

// console.log(updateFruits(fruits));
// console.log(fruits);

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

// const arr = ["best", "the", "foo", "is", "js"];
// const newArray = [...arr];
// const idx = newArray.indexOf("foo");
// newArray.splice(idx, 1);
// newArray.reverse();
// console.log(newArray.join(" "));
// console.log(arr);

// const string = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
//   .reverse()
//     .join(" ");
// console.log(string);

/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;
// console.log(checkBrackets(someFn));
// function checkBrackets(str) {
//   const stack = [];
//   const obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   for (let i = 0; i < str.length; i++) {
//     const bracket = str[i];
//     if (bracket === "(" || bracket === "{" || bracket === "[") {
//       stack.push(bracket);
//     }
//     if (bracket === "}" || bracket === ")" || bracket === "]") {
//       const lastEl = stack.pop();
//       if (bracket !== obj[lastEl]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length) return false;
//   return true;
// }
// console.log(checkBrackets(someFn));
///**

// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];
function updateFruits(arr) {
 return arr.map((fruit, index) => {return {...fruit, price: fruit.price * 0.8, id: index+1}})
}

console.log(updateFruits(fruits));