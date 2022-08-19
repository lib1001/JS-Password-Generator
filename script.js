// Assignment Code
var generateBtn = document.querySelector("#generate");

// declaring variables that include all of the possible characters, sorted into appropriate variable.
var lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbersArray = '1234567890'.split('');
var specialCharsArray = '!@#$%^&*()_+'.split('');


function generatePassword() {
while (true) {
  var userChoice = window.prompt("Choose the number of characters for your password \n(Must be between 8 and 128)");
  var passLength = parseInt(userChoice);
  if (!userChoice) {
    return
  }
  if (isNaN(passLength)) {
  window.alert("Must be a number");
  }
  else if (passLength < 8 || passLength > 128) {
  window.alert("Must be between 8 and 128 characters");
  }
  else {
    break
  }
}

var passLowercase = window.confirm("Click OK to include lowercase characters"); 
var passUppercase = window.confirm("Click OK to include uppercase characters");
var passNumbers = window.confirm("Click OK to include numbers");
var passSpecialChars = window.confirm("Click OK to include special characters");
var userSelections = []

if (passLowercase) {
  userSelections.push(lowercaseArray)
}
if (passUppercase) {
  userSelections.push(uppercaseArray)
}

if (passNumbers) {
  userSelections.push(numbersArray)
}

if (passSpecialChars) {
  userSelections.push(specialCharsArray)
}

// defaults password to lowercase if no character types are selected
if (!userSelections.length) {
  userSelections.push(lowercaseArray);
}

console.log(passLength);
console.log(passLowercase);
console.log(passUppercase);
console.log(passNumbers);
console.log(passSpecialChars);

//made sense last night but dont remember why
function randomInt(min, max) {
if (!max) {
  max = min;
  min = 0;
}
  var rand = Math.random()
  return Math.floor(min *(1 - rand) + rand*max);
}

function randomItem(list) {
  return list[randomInt(0, list.length)]
}

 var newPassword = "";

 for (var i = 0; i < passLength; i++) {
 var randomArray = randomItem(userSelections);
 var randomChar = randomItem(randomArray);
  newPassword += randomChar;
}

  return newPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


























