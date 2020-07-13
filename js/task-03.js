"use script";

const ADMIN_PASSWORD = "armagedon";
let message;
let userInput;

userInput = prompt("enter your password");
if (userInput === null) {
  message = "Отменено пользователем!";
} else if (userInput === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
