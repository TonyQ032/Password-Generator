// Assignment Code
var generateBtn = document.querySelector("#generate");

// Code for popup
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
  let characters = ""

// Getting Password length from user

  var passwordLength = Math.round(parseInt(document.querySelector("#password-length").value));
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
  // User conditions

  // checks to see the state of the checkboxes in the popup form
  var includeUpperCase = document.querySelector("#include-uppercase").checked;
  var includeLowerCase = document.querySelector("#include-lowercase").checked;
  var includeNumbers = document.querySelector("#include-numbers").checked;
  var includeSpecial = document.querySelector("#include-special").checked;

  //debugging purposes, this can be deleted
  var userConditions = [includeUpperCase, includeLowerCase, includeNumbers, includeSpecial];
  console.log(userConditions);

  //works but can optimized into a for loop
  if (includeUpperCase) {
    characters += upperCaseLetters;
    console.log("Selected upper case letters");
  } else {
    console.log("No upper case letters");
  };

  if (includeLowerCase) {
    characters += lowerCaseLetters;
    console.log("Selected lower case letters");
  } else {
    console.log("No lower case letters");
  };

  if (includeNumbers) {
    characters += passwordNumbers;
    console.log("Selected numbers");
  } else {
    console.log("No numbers");
  };

  if (includeSpecial) {
    characters += specialCharacters;
    console.log("Selected special characters");
  } else {
    console.log("No special characters");
  };

  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecial) {
    console.log("Please select a criteria");
    return;
  } else {
    console.log("Criteria accepted")
  }

  console.log(characters);

  // this next section should randomly assign each character in a string

  console.log(characters.length);
  console.log(Math.floor(Math.random() * characters.length));

  console.log(characters.charAt(0));

  







  //this should be the final line. Makes the popup disappear after generating password
  popup.removeAttribute("id", "popup-appear");
}







generateBtn.addEventListener("click", openPopup); 
popupSubmit.addEventListener("click", generatePassword); 


// when "Generate Password" button is clicked, it runs the function 'writePassword()'
