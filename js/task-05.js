"use script";

const chooseYourCountry = prompt("укажите свою страну для отправки товара");

const normalizedForCountry = chooseYourCountry.toLowerCase();

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

switch (normalizedForCountry) {
  case china:
    console.log(`Доставка в ${china} будет стоить ${priceChina} кредитов`);
    break;

  case chile:
    console.log(`Доставка в ${chile} будет стоить ${priceChile} кредитов`);
    break;

  case australia:
    console.log(
      `Доставка в ${australia} будет стоить ${priceAustralia} кредитов`
    );
    break;

  case india:
    console.log(`Доставка в ${india} будет стоить ${priceIndia} кредитов`);
    break;

  case jamaica:
    console.log(`Доставка в ${jamaica} будет стоить ${priceJamaica} кредитов`);
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
