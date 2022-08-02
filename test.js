let openEyeIcon, closeEyeIcon;

let DOMstrings = {
  submitBtn: document.getElementById("form--submit"),
  
  firstName: document.getElementById("firstname"),
  lastName: document.getElementById("lastname"),
  email: document.getElementById("email"),
  number: document.getElementById("number"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("password"),

  emptyFirstName: document.getElementById("empty---firstName"),
  emptyLastName: document.getElementById("empty---lastName"),
  emptyEmail: document.getElementById("empty---email"),
  emptyNumber: document.getElementById("empty---number"),
  emptyPassword: document.getElementById("empty---password"),
  emptyConfirmPassword: document.getElementById("empty---confirmPassword"),

  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirm--password"),

  openEyeIcon: document.getElementById("open-eye"),
  closeEyeIcon: document.getElementById("close-eye"),
}

DOMstrings["openEyeIcon"].addEventListener("click",showPassword)
DOMstrings["closeEyeIcon"].addEventListener("click",hidePassword)


function validateForm () {
  /********* Locate all empty inputs and throw an error if empty    ******************/

  // Empty firstName
    validateFirstName()

  // Empty lastname
    validateLastname()

  // Empty email
    validateEmail()    

  // Required selection
    validateGender()

  // Empty number
    validateNumber()

  // Empty Password
    validatePassword()

  // Empty confirm Password
    validateConfirmPassword()
  
}

/////// Form hide and show password icon section //////////

function showPassword () {
  DOMstrings["openEyeIcon"].style.display = "none"
  DOMstrings["closeEyeIcon"].style.display = "block"
  DOMstrings["password"].type = "text"
}
function hidePassword () {
  DOMstrings["openEyeIcon"].style.display = "block"
  DOMstrings["closeEyeIcon"].style.display = "none"
  DOMstrings["password"].type = "password"
}




//////////    Valiador functions    ///////// 
function validateFirstName () {
  if (DOMstrings["firstName"].value == "") {
    DOMstrings["firstName"].style.borderColor = "red"
    DOMstrings["emptyFirstName"].style.display = "block"
  } else{
    DOMstrings["firstName"].style.borderColor = "var(--color-sec)"
    DOMstrings["emptyFirstName"].style.display = "none"
  }

  

}

function validateLastname (params) {
  if (DOMstrings["lastName"].value == "") {
    DOMstrings["lastName"].style.borderColor = "red"
    DOMstrings["emptyLastName"].style.display = "block"
  } else{
    DOMstrings["lastName"].style.borderColor = "var(--color-sec)"
    DOMstrings["emptyLastName"].style.display = "none"
  }
}

function validateEmail () {
  if (DOMstrings["email"].value == "") {
    DOMstrings["email"].style.borderColor = "red"
    DOMstrings["emptyEmail"].style.display = "block"
  } else{
    DOMstrings["email"].style.borderColor = "var(--color-sec)"
    DOMstrings["emptyEmail"].style.display = "none"
  }

  // Regex for form validate
  emailRegex = /[A-Za-z\d]((@gmail.com)$|(@[A-Za-z]{2,}.[A-Za-z]{2})$|(@[A-Za-z]{2,}.[A-Za-z]{3})$)/gi

  if (DOMstrings["email"].value !== "" && emailRegex.test(DOMstrings["email"].value) == false) {
    DOMstrings["email"].style.borderColor = "red"
    document.getElementById("emailError").style.display = "block"
  } else if (DOMstrings["email"].value !== "" && emailRegex.test(DOMstrings["email"].value) == true) {
    DOMstrings["email"].style.borderColor = "var(--color-sec)"
    document.getElementById("emailError").style.display = "none"
  } else{
    DOMstrings["email"].style.borderColor = "var(--color-sec)"
    document.getElementById("emailError").style.display = "none"
  }


}

function validateGender () {
  if (document.querySelector(".gender").value == "gender") {
    document.querySelector(".gender").style.borderColor = "red"
    document.querySelector("#empty--gender").style.display = "block"
  } else {
    document.querySelector(".gender").style.borderColor = "var(--color-sec)"
    document.querySelector("#empty--gender").style.display = "none"
  }
}

function validateNumber () {
  if (DOMstrings["number"].value == "") {
    DOMstrings["number"].style.borderColor = "red"
    DOMstrings["emptyNumber"].style.display = "block"
  } else{
    DOMstrings["number"].style.borderColor = "var(--color-sec)"
    DOMstrings["emptyNumber"].style.display = "none"
  }
  numberRegex = /[0-9]{11}/g
  if (DOMstrings["number"].value !== "" && numberRegex.test(DOMstrings["number"].value) == false)  {
    DOMstrings["number"].style.borderColor = "red"
    document.querySelector("#invalidNumber").style.display = "block"
  }else{
    DOMstrings["number"].style.borderColor = "var(--color-sec)"
    document.querySelector("#invalidNumber").style.display = "none"
  }
}

setInterval(validateNetworkProvider,);
  

function validatePassword () {
  if (DOMstrings["password"].value == "") {
    DOMstrings["password"].style.borderColor = "red"
    DOMstrings["emptyPassword"].style.display = "block"
  } else{
    DOMstrings["password"].style.borderColor = "var(--color-sec)"
    DOMstrings["emptyPassword"].style.display = "none"
  }    
}

function validateConfirmPassword () {
  if (DOMstrings["confirmPassword"].value !== DOMstrings["password"].value) {
    DOMstrings["confirmPassword"].style.borderColor = "red"
    document.querySelector("#confirmPasswordError").style.display = "block"
  } else{
    DOMstrings["confirmPassword"].style.borderColor = "var(--color-sec)"
    document.querySelector("#confirmPasswordError").style.display = "none"
  }
}

function validateNetworkProvider () {
  let networkProvidersPrefix = {
    airtel: /^(0802|0808|0812|0708|0701|0902|0901|0907)\d{7}$/,
    mtn: /^(0803|0806|0814|0810|0813|0814|0816|0703|0706|0903|0906)\d{7}$/,
    glo: /^(0805|0807|0811|0815|0705|0905)\d{7}$/,
    etisalat: /^(0809|0817|0818|0908|0909)\d{7}$/
  }

  switch (true) {
  case networkProvidersPrefix["airtel"].test(DOMstrings["number"].value):
      document.querySelector(".airtel").style.display = "block"
    break;
  case networkProvidersPrefix["mtn"].test(DOMstrings["number"].value):
    document.querySelector(".mtn").style.display = "block"
    break;
  case networkProvidersPrefix["etisalat"].test(DOMstrings["number"].value):
    document.querySelector(".etisalat").style.display = "block"
    break;
  case networkProvidersPrefix["glo"].test(DOMstrings["number"].value):
    document.querySelector(".glo").style.display = "block"
    break;
  default:
    document.querySelector(".airtel").style.display = "none"
    document.querySelector(".mtn").style.display = "none"
    document.querySelector(".etisalat").style.display = "none"
    document.querySelector(".glo").style.display = "none"
    break;
  }
}

DOMstrings.submitBtn.addEventListener("click",validateForm)
DOMstrings.submitBtn.addEventListener("click", function(event){
  event.preventDefault()
});


// All errros functions
