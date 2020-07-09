"use script";

let chooseYourCountry = prompt("укажите свою страну для отправки товара");

const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
const china = "china";
const chile = "chile";
const australia = "australia";
const india = "india";
const jamaica = "jamaica";

let result;

switch (chooseYourCountry) {
  case china:
    result = `Доставка в ${china} будет стоить ${priceChina} кредитов`;
    break;

  case chile:
    result = `Доставка в ${chile} будет стоить ${priceChile} кредитов`;
    break;

  case australia:
    result = `Доставка в ${australia} будет стоить ${priceAustralia} кредитов`;
    break;

  case india:
    result = `Доставка в ${india} будет стоить ${priceIndia} кредитов`;
    break;

  case jamaica:
    result = `Доставка в ${jamaica} будет стоить ${priceJamaica} кредитов`;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}

console.log(result);
