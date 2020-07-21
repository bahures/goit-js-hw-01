"use script";

const chooseYourCountry = prompt("укажите свою страну для отправки товара");

const china = "china";
const chile = "chile";
const australia = "australia";
const india = "india";
const jamaica = "jamaica";
const priceToChina = 100;
const priceToChile = 250;
const priceToAustralia = 170;
const priceToIndia = 80;
const priceToJamaica = 120;

switch (chooseYourCountry.toLowerCase()) {
  case china:
    console.log(`Доставка в ${china} будет стоить ${priceToChina} кредитов`);
    break;

  case chile:
    console.log(`Доставка в ${chile} будет стоить ${priceToChile} кредитов`);
    break;

  case australia:
    console.log(
      `Доставка в ${australia} будет стоить ${priceToAustralia} кредитов`
    );
    break;

  case india:
    console.log(`Доставка в ${india} будет стоить ${priceToIndia} кредитов`);
    break;

  case jamaica:
    console.log(
      `Доставка в ${jamaica} будет стоить ${priceToJamaica} кредитов`
    );
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
