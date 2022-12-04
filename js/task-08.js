const inputEm = document.querySelector("email");
const inputPass = document.querySelector("password");

const form = document.querySelector(".login-form");
form.addEventListener("submit", login);
function login(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    return alert("всі поля повинні бути заповнені.");
  }
  const dataForm = {
    email,
    password,
  };
  console.log(dataForm);
  form.reset();
}
