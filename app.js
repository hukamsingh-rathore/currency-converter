const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropDown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#convert-button");
const fromCurr = document.querySelector('select[name="from"]');
const toCurr = document.querySelector('select[name="to"]');
const amountInput = document.querySelector("#amount");
const msg = document.querySelector(".msg");


for (let select of dropDown) {
  for (let key in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = key;
    newOption.value = key;
    

    if (select.name === "from" && key === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && key === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}


const updateFlag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};


btn.addEventListener("click", async (e) => {
  e.preventDefault();
  
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }


  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

  const URL = `${Base_URL}/${from}.json`;
  
  let response = await fetch(URL);
  let data = await response.json();

  let rate = data[from][to];
  let finalAmount = amountVal * rate;

  console.log(`${amountVal} ${from.toUpperCase()} = ${finalAmount} ${to.toUpperCase()}`);
  
  if (msg) {
    msg.innerText = `${amountVal} ${from.toUpperCase()} = ${finalAmount.toFixed(2)} ${to.toUpperCase()}`;
  }
});