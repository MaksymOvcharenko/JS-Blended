//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const alertBtnEl = document.querySelector("#alertButton");
const alertInputEl = document.querySelector("#alertInput");
const onAlertBtnClick = () => {
  alert(alertInputEl.value);
};
alertBtnEl.addEventListener("click", onAlertBtnClick);
//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const swapButtonEl = document.querySelector("#swapButton");
const leftSwapInputEl = document.querySelector("#leftSwapInput");
const rightSwapInputEl = document.querySelector("#rightSwapInput");

swapButtonEl.addEventListener("click", () => {
  const leftSwapInputValue = leftSwapInputEl.value;
  const rightSwapInputValue = rightSwapInputEl.value;
  leftSwapInputEl.value = rightSwapInputValue;
  rightSwapInputEl.value = leftSwapInputValue;
});
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const passwordInputEl = document.querySelector("#passwordInput");
const passwordButtonEl = document.querySelector("#passwordButton");

passwordButtonEl.addEventListener("click", () => {
  if (passwordButtonEl.textContent === "Приховати") {
    passwordInputEl.setAttribute("type", "password");
    passwordButtonEl.textContent = "Розкрити";
    return;
  }
  passwordInputEl.setAttribute("type", "text");
  passwordButtonEl.textContent = "Приховати";
});

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const boxEl = document.querySelector("#box");
const decreaseEl = document.querySelector("#decrease");
const increaseEl = document.querySelector("#increase");

decreaseEl.addEventListener("click", () => {
  let boxSize = parseInt(getComputedStyle(boxEl).height);

  boxEl.style.height = boxSize - 10 + "px";
  boxEl.style.width = boxSize - 10 + "px";
});

increaseEl.addEventListener("click", () => {
  let boxSize = parseInt(getComputedStyle(boxEl).height);

  boxEl.style.height = boxSize + 10 + "px";
  boxEl.style.width = boxSize + 10 + "px";
});

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

addEventListener("click", (event) => {
  if (event.target.id === "place") {
    console.log(true);
  } else {
    console.log(false);
  }
});
//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
const listItemsEL = document.querySelectorAll('.listItem');
const btnDoubleEl = document.querySelector('#double');
btnDoubleEl.addEventListener('click', () => {
  listItemsEL.forEach(listItem => {
    listItem.textContent = BigInt(listItem.textContent) ** 2n;
  })
})
//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
