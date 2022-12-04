let counterValue = 0;

const counterEL = document.getElementById("counter");
const decrementEL = counterEL.firstElementChild;

const incrementEl = counterEL.lastElementChild;

const valueEl = document.getElementById("value");

decrementEL.addEventListener("click", handleDecrementBtnClick);
incrementEl.addEventListener("click", handleIncrementBtnClick);

function handleDecrementBtnClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function handleIncrementBtnClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
