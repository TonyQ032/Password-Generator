// Assignment Code
var generateBtn = document.querySelector("#generate");
var popup = document.querySelector("#popup");
var popupSubmit = document.querySelector("#submit-button");

function openPopup() {
  popup.setAttribute("id", "popup-appear");
}

function generatePassword() {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const lowerCaseLetters = upperCaseLetters.toLowerCase();
  const passwordNumbers = "0123456789"
  const specialCharacters = "~!@#$%^&*()_+-="
  let finalPassword = ""
  let character = ""

// Getting Password length from user

  let passwordLength = Math.round(parseInt(document.getElementById("password-length").value));
  if (passwordLength < 8) {
    //should tell the user the criteria isn't met
      // add a message in red HTML <p> tag
    return;
  } else if (passwordLength > 128) {
     //should tell the user the criteria isn't met
      // add a message in red HTML <p> tag
      return;
  } else {
    //should accept user input
    console.log(typeof passwordLength);
    console.log(passwordLength);
  };

  // if password length is between 8-128 characters, move forward






  //this should be the final line. Makes the popup disappear after generating password
  popup.removeAttribute("id", "popup-appear");
}





// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }



generateBtn.addEventListener("click", openPopup); 
popupSubmit.addEventListener("click", generatePassword); 


// when "Generate Password" button is clicked, it runs the function 'writePassword()'
