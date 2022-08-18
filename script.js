// Assignment Code
var generateBtn = document.querySelector("#generate");

// declaring variables that include all of the possible characters, declared into appropriate variable.
var lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbersArray = '1234567890'.split('');
var specialCharsArray = '!@#$%^&*()_+'.split('');

// 
function generatePassword() {
var userChoice = window.prompt("Choose the number of characters for your password \n(Must be between 8 and 128)");
var passLength = parseInt(userChoice);
if (!passLength) {
  return;
}
else if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  window.alert("Must be a digit between 8 and 128 characters");
  return window.prompt("Choose the number of characters for your password \n(Must be between 8 and 128)");
}
 else {
      alert("You must select at least one of the character types from the following 4 prompts \n(lowercase, uppercase, number, special character)");
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
if (userSelections.length === 0) {
  userSelections.push(lowercaseArray);
}

console.log(passLength);
console.log(passLowercase);
console.log(passUppercase);
console.log(passNumbers);
console.log(passSpecialChars);


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































// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var choiceArr = [];
// var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialCharsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
// var passLength = 8;

// // Write password to the #password input
// function askPrompts() {
//   choiceArr = [];

//   var passLength = (prompt("Choose the number of characters for your password \n(Must be between 8 and 128)"));
//   if (!passLength) {
//     return;
//   }
//   if (passLength<8 || passLength>128) {
//     alert("Must be between 8 and 128 characters");
//     writePassword();
//   }
//   else {
//   alert("You must select at least one of the character types from the following 4 prompts \n(lowercase, uppercase, number, special character)");
//   }

//   lowercase = confirm("Click OK to include lowercase characters");
//   if (lowercase === true) {
// console.log("confirmed");
// choiceArr = choiceArr.concat(lowercase);
//   } 
//   else{
//     console.log("declined");
//     return false;
//   }

//  uppercase = confirm("Click OK to include uppercase characters");
//   if (uppercase === true) {
//     console.log("confirmed");
//     choiceArr = choiceArr.concat(uppercase);
//   } 
//   else{
//     console.log("declined");
//     return false;
//   }

//   numbers = confirm("Click OK to include numbers");
//   if (numbers === true) {
//     console.log("confirmed");
//     choiceArr = choiceArr.concat(numbers);
 
//   } 
//   else{
//     console.log("declined");
//     return false;
//   }

//   specialChars = confirm("Click OK to include special characters");
//   if (specialChars === true) {
//     console.log("confirmed");
//     choiceArr = choiceArr.concat(specialChars);
//   } 
//   else{  
//     console.log("declined");
//     return false;
//   }
// }  

// function generatePassword() {
//   var password = "";
//   for (var i = 0; i < passLength; i++) {
//     password = password + choiceArr(Math.floor(Math.random() * choiceArr.length));
// }
// return password;
// }

  

// function writePassword () {
//   var truePrompts = askPrompts();
//   var passwordText = document.querySelector("#password");

//   if (askPrompts === true) {
//     var password2 = generatePassword();
//     passwordText.value = password2;}
//     else {
//       passwordText.value = "";
//     }

// }





// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
