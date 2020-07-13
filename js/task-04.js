"use script";

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let droidAmount = prompt("Какое количество дроидов Вы хотите преобрести?");
droidAmount = Number(droidAmount);

if (droidAmount === null) {
  console.log("отменено пользователем");
} else {
  totalPrice = pricePerDroid * droidAmount;
}

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  totalPrice < credits;
  console.log(
    `Вы купили ${droidAmount} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`
  );
}
