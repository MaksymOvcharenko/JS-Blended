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
const min = 11;
function partNumber(number) {
    if (number > 0 && number <= 15) {
        console.log ("first part")
    } else if (number > 15 && number <= 30) {
        console.log ("second part")
    }
    else if (number > 30 && number <= 45) {
        console.log ("third part")
    }
    else {
        console.log ("fourth part")
    }
}
partNumber(min);
