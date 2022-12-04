const validInputEl = document.getElementById("validation-input");
validInputEl.addEventListener("blur", borderColorChange);

function borderColorChange(event) {
  const enterSymbols = this.value;
  if (enterSymbols.length === 6) {
    validInputEl.classList.add("valid");
    validInputEl.classList.remove("invalid");
  } else {
    validInputEl.classList.add("invalid");
    validInputEl.classList.remove("valid");
  }
}
