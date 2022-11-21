const inputsForm = document.querySelectorAll(".group input");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const agreementCheckbox = document.getElementById("agreement");
const createButton = document.getElementById("create_button");

// Inputs regex
const emailRegex = /[a-zA-Z0-9_]+[@][a-zA-Z]+[.](com)([.](br))?/;
const usernameRegex = /[a-zA-Z0-9_-][+]?[=]?[@]?/;
const passwordRegex = /[a-zA-Z]{8}([?]?[+]?[=]?[@]?[#]?)/;


// add or remove "error" class
emailInput.oninput = () => {
   if (emailRegex.test(emailInput.value)) {
      emailInput.setAttribute("class", "success");
   } else if (emailRegex.test(emailInput.value) !== true) {
      emailInput.setAttribute("class", "error");
   } else {
      emailInput.removeAttribute("class", "error");
   }
};

usernameInput.oninput = () => {
   if (usernameRegex.test(usernameInput.value)) {
      usernameInput.setAttribute("class", "success");
   } else if (usernameRegex.test(usernameInput.value) !== true) {
      usernameInput.setAttribute("class", "error");
   } else {
      usernameInput.removeAttribute("class", "error");
   }
};

passwordInput.oninput = () => {
   if (passwordRegex.test(passwordInput.value)) {
      passwordInput.setAttribute("class", "success");
   } else if (passwordRegex.test(passwordInput.value) !== true) {
      passwordInput.setAttribute("class", "error");
   } else {
      passwordInput.removeAttribute("class", "error");
   }
};

// enable and desable the create_button
agreementCheckbox.onchange = () => {
   if (agreementCheckbox.checked) {
      createButton.disabled = false;
      createButton.setAttribute("class", "active");
   } else {
      createButton.disabled = true;
   }
}

