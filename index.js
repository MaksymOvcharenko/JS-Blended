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
