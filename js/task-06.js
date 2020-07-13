"use script";

let total = 0;

do {
  let input = prompt("введите число");
  if (input === null) {
    break;
  }

  input = Number(input);

  const isThisANumber = Number.isNaN(input);
  if (isThisANumber) {
    alert("было введено не число, попробуйте еще раз");
    continue;
  }

  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);
