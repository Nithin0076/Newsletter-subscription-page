
function validate() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailFormat.test(emailValue)) {
      window.location.href = "successmsg.html";
    } else {
      var errorMsg = document.getElementsByClassName("errormsg")[0];
      errorMsg.style.display = "block";
      emailInput.style.backgroundColor = "hsl(5, 100%, 95%)";
      emailInput.style.borderColor = "red";
      emailInput.style.color = "red";
    }
    localStorage.setItem('emailValue', emailValue);
}

// Retrieve the value from localStorage


function display(){
    var storedValue = localStorage.getItem('emailValue');
    var emailInput = document.getElementById("email");
    emailInput.textContent=storedValue;
}


function clearInputField() {
    document.getElementsByClassName('errormsg')[0].style.display = 'none';
    var emailInput = document.getElementById("email");
    emailInput.style.borderColor = "gray";
    emailInput.style.color = "black";
  }