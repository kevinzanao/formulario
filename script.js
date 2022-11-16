const emailInput = document.getElementById("email");

const emailRegex = /[a-zA-Z0-9_]+[@][a-zA-Z]+[.](com)([.](br))?/;


emailInput.oninput = () => {
   if(emailRegex.test(emailInput.value) === false) {
      emailInput.setAttribute("class", "error");
   } else {
      emailInput.removeAttribute("class", "error");
   }
};


