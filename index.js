const correctPassword = "Akademia";

const inputElement = document.getElementById("password-input");
const buttonElement = document.getElementById("check-button");
const messageElement = document.getElementById("message-display");


function checkPassword() {
  const wpisaneHaslo = inputElement.value;
  if (wpisaneHaslo === correctPassword) {
    messageElement.textContent = "Dostęp przyznany!";
    messageElement.style.color = "green";
  } else if (wpisaneHaslo.length < 6) {
    messageElement.textContent = "Hasło musi mieć co najmniej 6 znaków.";
    messageElement.style.color = "orange";
  } else {
    messageElement.textContent = "Dostęp wzbroniony!";
    messageElement.style.color = "red";
  }
}

buttonElement.addEventListener("click", checkPassword);
