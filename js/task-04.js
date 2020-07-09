"use script";
const credits = 23580;
const pricePerDroid = 3000;

let droidAmount = prompt("какое количество дронов Вы хотите приобрести");
let totalPrice = droidAmount * pricePerDroid;

if (droidAmount === null) {
  console.log("Отменено пользователем");
}

if (totalPrice > credits) {
  console.log("недостаточно средств на счету");
} else {
  let userCreditsBalance = credits - totalPrice;
  console.log(
    ` Вы купили ${droidAmount} дроидов, на счету осталось ${userCreditsBalance} кредитов.  `
  );
}
