const nameInputEl = document.getElementById("name-input");

const nameOutputEl = document.getElementById("name-output");

nameInputEl.addEventListener("input", userName);
function userName(event) {
  if (event.currentTarget.value.trim()) {
    nameOutputEl.textContent = this.value;
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
}
