const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".appBody__sectionLeft-amountOne");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector(".appBody__sectionRight-amountTwo");
const swapBtn = document.querySelector(".appBody__swap");
const rateInfo = document.querySelector(".rateInfo");

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
    });
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);

calculate();
