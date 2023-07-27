// Assign all four possible character pools
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
// Initialize variables globally to allow for repeated use
var password;
var characterPool = [];
var passLength;
var passwordText;
var generatedPassword;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Check for valid password length
function checkLength() {
  passLength = 0;
  characterPool = [];
  while (!Number.isInteger(passLength) || passLength < 8 || passLength > 128) {
    passLength = prompt("Enter the number of characters to include in your password (between 8 and 128):");
    // If user clicks "cancel"
    if (passLength == null) {
      return false;
    } else {
      // Check for valid length
      passLength = Number(passLength);
      if (!Number.isInteger(passLength)) {
        alert("Please enter a valid whole number between 8 and 128.");
      } else if (passLength < 8) {
        alert("Too short! Please choose a number between 8 and 128.");
      } else if (passLength > 128) {
        alert("Too long! Please choose a number between 8 and 128.");
      } else {
        return true;
      }
      }
    }
}

// Generate password based on prompts
function generatePassword() {
  generatedPassword = "";
  if (checkLength()) {
    if (confirm("Would you like lowercase letters in your password?") === true) {
      characterPool = characterPool.concat(lowercase);
    }
    if (confirm("Would you like uppercase letters in your password?") === true) {
      characterPool = characterPool.concat(uppercase);
    }
    if (confirm("Would you like numbers in your password?") === true) {
      characterPool = characterPool.concat(numbers);
    }
    if (confirm("Would you like special characters in your password?") === true) {
      characterPool = characterPool.concat(special);
    }
    // If user doesn't pick any possible characters
    if (characterPool.length === 0) {
      alert("Sorry, we need at least one group of characters to generate a password!");
    } else {
      // Generate password
      for(var i = 0; i < passLength; i++) {
        generatedPassword = generatedPassword + characterPool[Math.floor(Math.random() * characterPool.length)];
      }
      return generatedPassword;
    }
  }
}

// Write password to the #password input
function writePassword() {
  passwordText = document.querySelector("#password");
  password = generatePassword();
  // Avoid showing "undefined" in the password field
  if (password !== undefined) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
