// Assignment Code
var generateBtn = document.querySelector("#generate");

// Code for popup
var popup = document.querySelector("#popup");
var popupSubmit = document.querySelector("#submit-button");

// Opens popup (which can also be closed by pressing the escape key, can be submitted using enter)
// can be improved
function openPopup() {
  popup.setAttribute("id", "popup-appear");
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      popup.removeAttribute("id", "popup-appear");
      return;
    } else if (event.key === "Enter") {
      generatePassword();
    } else {
      console.log("No escape key detected");
    }
  });
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
    alert("The password must be at least 8 characters");
    return;
  } else if (passwordLength > 128) {
    alert("The password must be shorter than 128 characters");
    return;
  } else {
    console.log(passwordLength);
  };

  // if password length is between 8-128 characters, move forward
  // User conditions

  // checks to see the state of the checkboxes in the popup form
  var includeUpperCase = document.querySelector("#include-uppercase").checked;
  var includeLowerCase = document.querySelector("#include-lowercase").checked;
  var includeNumbers = document.querySelector("#include-numbers").checked;
  var includeSpecial = document.querySelector("#include-special").checked;

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
    alert("Password must have at least one type of character.");
    return;
  } else {
    console.log("Criteria accepted")
  }

  console.log(characters);

  // This loop assigns a random letter from the user's chosen criteria, 
  // for each letter of the user's new password

  for (var i = 0; i < passwordLength; i ++) {
    finalPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  console.log(finalPassword);

  document.querySelector("textarea").textContent = "";
  document.querySelector("textarea").textContent += finalPassword;

  //This should be the final line. Makes the popup disappear after generating password
  popup.removeAttribute("id", "popup-appear");
}

generateBtn.addEventListener("click", openPopup); 
popupSubmit.addEventListener("click", generatePassword); 