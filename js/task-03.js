"use script";

const ADMIN_PASSWORD = "armagedon";
let message;
let userInput;

do {
  userInput = prompt("enter your password");
  if (userInput === null) {
    message = "Отменено пользователем!";
    console.log(message);
    break;
  } else if (userInput === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
    console.log(message);
  } else if (userInput !== ADMIN_PASSWORD) {
    message = "Доступ запрещен, неверный пароль!";
    console.log(message);
  }
} while (userInput !== ADMIN_PASSWORD);

alert(message);
