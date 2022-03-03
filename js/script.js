const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".appBody__sectionLeft-amountOne");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector(".appBody__sectionRight-amountTwo");
const swapBtn = document.querySelector(".appBody__swap");
const rateInfo = document.querySelector(".rateInfo");
const imgOne = document.querySelector(".imgOne");
const imgTwo = document.querySelector(".imgTwo");

const calculate = () => {
  fetch(
    `https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const currency1 = currencyOne.value;
      const currency2 = currencyTwo.value;
      const rate = data.rates[currency2];

      rateInfo.textContent = `${amountOne.value} ${currency1} = ${rate.toFixed(
        4
      )} ${currency2}`;

      amountTwo.value = (amountOne.value * rate).toFixed(3);
      changeFlagsOne();
      changeFlagsTwo();
    });
};

const changeFlagsOne = () => {
  const currentText = currencyOne.options[currencyOne.selectedIndex].text;
  switch (currentText) {
    case "PLN":
      imgOne.setAttribute("src", "./img/plFlag.png");
      break;
    case "USD":
      imgOne.setAttribute("src", "./img/usdFlag.png");
      break;
    case "GBP":
      imgOne.setAttribute("src", "./img/gbpFlag.png");
      break;
    case "EUR":
      imgOne.setAttribute("src", "./img/euroFlag.png");
      break;
    case "RUB":
      imgOne.setAttribute("src", "./img/rusFlag.png");
      break;
    case "CNY":
      imgOne.setAttribute("src", "./img/chnFlag.png");
      break;
  }
};

const changeFlagsTwo = () => {
  const currentText = currencyTwo.options[currencyTwo.selectedIndex].text;
  switch (currentText) {
    case "PLN":
      imgTwo.setAttribute("src", "./img/plFlag.png");
      break;
    case "USD":
      imgTwo.setAttribute("src", "./img/usdFlag.png");
      break;
    case "GBP":
      imgTwo.setAttribute("src", "./img/gbpFlag.png");
      break;
    case "EUR":
      imgTwo.setAttribute("src", "./img/euroFlag.png");
      break;
    case "RUB":
      imgTwo.setAttribute("src", "./img/rusFlag.png");
      break;
    case "CNY":
      imgTwo.setAttribute("src", "./img/chnFlag.png");
      break;
  }
};

const swap = () => {
  const oldValue = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = oldValue;

  calculate();
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swapBtn.addEventListener("click", swap);
calculate();
