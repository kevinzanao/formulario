const emailInput = document.getElementById("email");
const agreementCheckbox = document.getElementById("agreement");
const createButton = document.getElementById("create_button");

const emailRegex = /[a-zA-Z0-9_]+[@][a-zA-Z]+[.](com)([.](br))?/;


emailInput.oninput = () => {
   if(emailRegex.test(emailInput.value) === false) {
      emailInput.setAttribute("class", "error");
   } else {
      emailInput.removeAttribute("class", "error");
   }
};

agreementCheckbox.onchange = () => {
   if (agreementCheckbox.checked) {
      createButton.disabled = false;
      createButton.setAttribute("class", "active");
   } else {
      createButton.disabled = true;
   }
}

