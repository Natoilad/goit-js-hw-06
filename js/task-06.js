const validInputEl = document.getElementById("validation-input");
validInputEl.addEventListener("blur", borderColorChange);

function validEl() {
  validInputEl.classList.add("valid");
  validInputEl.classList.remove("invalid");
}

function inValidEl() {
  validInputEl.classList.add("invalid");
  validInputEl.classList.remove("valid");
}

function borderColorChange(event) {
  const enterSymbols = this.value.trim();
  if (enterSymbols.length === Number(validInputEl.dataset.length)) {
    validEl();
  } else {
    // console.log(typeof validInputEl.dataset.length);

    inValidEl();
  }
}

// console.dir(borderColorChange);
