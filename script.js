// Assignment Code
var generateBtn = document.querySelector("#generate");
var choiceArr = []
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]

// Write password to the #password input
function askPrompts() {
  var passLength = parseInt(prompt("Choose the number of characters for your password \n(Must be between 8 and 128)"));
  if (!passLength) {
    return;
  }
  if (passLength<8 || passLength>128 || isNaN) {
    alert("Must be between 8 and 128 characters");
    writePassword();
  }
  else {
  alert("You must select at least one of the character types from the following 4 prompts \n(lowercase, uppercase, number, special character");
  }

  var passLowercase = confirm("Click OK to include lowercase characters");
  if (passLowercase === true) {
console.log("confirmed");
choiceArr = choiceArr.concat(lowerCase);
  } 
  else{
    console.log("declined");
  }

  var passUppercase = confirm("Click OK to include uppercase characters");
  if (passUppercase === true) {
    console.log("confirmed");
    choiceArr = choiceArr.concat(upperCase);
  } 
  else{
    console.log("declined");
  }

  var passNumbers = confirm("Click OK to include numbers");
  if (passNumbers === true) {
    console.log("confirmed");
    choiceArr = choiceArr.concat(numbers);
  } 
  else{
    console.log("declined");
  }

  var passSpecialChars = confirm("Click OK to include special characters");
  if (passSpecialChars === true) {
    console.log("confirmed");
    choiceArr = choiceArr.concat(specialChars);
  } 
  else{
  }
}  

  

function writePassword () {
  var truePrompts = askPrompts();
  var passwordText = document.querySelector("#password");

  if(truePrompts) {
    var password2 = generatePassword();
    passwordText.value = password2;}
    else {
      passwordText.value = "";
    }

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[index];
}
return password;
}
