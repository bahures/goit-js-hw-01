"use script";

const chooseYourCountry = prompt("укажите свою страну для отправки товара");

const normalizedForCountry = chooseYourCountry.toLowerCase();
let price = 0;

const china = "china";
const chile = "chile";
const australia = "australia";
const india = "india";
const jamaica = "jamaica";

switch (normalizedForCountry) {
  case china:
    price = 100;
    console.log(`Доставка в ${china} будет стоить ${price} кредитов`);
    break;

  case chile:
    price = 250;
    console.log(`Доставка в ${chile} будет стоить ${price} кредитов`);
    break;

  case australia:
    price = 170;
    console.log(`Доставка в ${australia} будет стоить ${price} кредитов`);
    break;

  case india:
    price = 80;
    console.log(`Доставка в ${india} будет стоить ${price} кредитов`);
    break;

  case jamaica:
    price = 120;
    console.log(`Доставка в ${jamaica} будет стоить ${price} кредитов`);
    break;

  default:
    do {
      if (normalizedForCountry === null) {
        break;
      } else {
        alert("В вашей стране доставка не доступна");
      }
    } while ("");
}
