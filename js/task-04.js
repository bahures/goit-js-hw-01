"use script";

const credits = 23580;
const pricePerDroid = 3000;

let droidAmount = prompt("Какое количество дроидов Вы хотите преобрести?");

const totalPrice = pricePerDroid * droidAmount;

if (droidAmount === null) {
  alert("отменено пользователем");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  console.log(
    `Вы купили ${droidAmount} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`
  );
}
