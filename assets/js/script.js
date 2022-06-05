// Assignment Code
var generateBtn = document.querySelector("#generate");

// Code for popup window
var popup = document.querySelector("#popup");
var popupSubmit = document.querySelector("#submit-button");
var popupX = document.querySelector("#popup-x");

// Opens popup 
function openPopup() {
  popup.setAttribute("id", "popup-appear");
};

// Closes popup
function closePopup() {
  popup.removeAttribute("id", "popup-appear");
};

function generatePassword() {
  // Variables used throughout this function to generate password
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const lowerCaseLetters = upperCaseLetters.toLowerCase();
  const passwordNumbers = "0123456789"
  const specialCharacters = "~!@#$%^&*()_+-="
  let finalPassword = ""
  let characters = ""

  // Getting Password length from user 
  // If length is between 8 and 128 characters, moves forward
  var passwordLength = Math.round(parseInt(document.querySelector("#password-length").value));
  if (passwordLength < 8) {
    alert("The password must be at least 8 characters");
    return;
  } else if (passwordLength > 128) {
    alert("The password must be shorter than 128 characters");
    return;
  } else {};

  // Checks and assigns what parameters the user has assigned for the password
  var includeUpperCase = document.querySelector("#include-uppercase").checked;
  var includeLowerCase = document.querySelector("#include-lowercase").checked;
  var includeNumbers = document.querySelector("#include-numbers").checked;
  var includeSpecial = document.querySelector("#include-special").checked;
  
  // Lists used in the upcoming loop
  var includePossibilities = [includeUpperCase, includeLowerCase, includeNumbers, includeSpecial];
  var passwordConditions = [upperCaseLetters, lowerCaseLetters, passwordNumbers, specialCharacters];

  // Loop iterates 4 times and checks the state of each user-selected condition
  // Adds the selected conditions to the possible user password
  for (var i = 0; i < 4; i++) {
    if (includePossibilities[i]) {
      characters += passwordConditions[i];
    } else {}
  };

  // Ensures that there is at least one condition selected
  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecial) {
    alert("Password must have at least one type of character.");
    return;
  } else {};

  // This loop assigns a random letter from the user's chosen criteria, 
  // for each letter of the user's new password
  for (var i = 0; i < passwordLength; i ++) {
    finalPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  };

  // Clears the text area and then adds the newly generated password to it
  document.querySelector("textarea").textContent = "";
  document.querySelector("textarea").textContent += finalPassword;

  // Makes the popup disappear after generating password
  popup.removeAttribute("id", "popup-appear");
};

// (With Esc) Exits popup window without generating password 
// (With Enter) Generates password if popup open, otherwise opens popup
document.addEventListener("keydown", function(event) {
  let popUpExists = document.getElementById("popup-appear");
  if (event.key === "Escape") {
    popup.removeAttribute("id", "popup-appear");
    return;
  } else if (event.key === "Enter" && popUpExists) {
    generatePassword();
  } else if (event.key === "Enter" && !popUpExists) {
    openPopup();
  } else {}
});

// Opens popup menu with all the selectors
generateBtn.addEventListener("click", openPopup);

// Closes popup menu when x is clicked
popupX.addEventListener("click", closePopup);

// Closes popup menu (with Esc key) and generates password (with enter/return key)
popupSubmit.addEventListener("click", generatePassword);