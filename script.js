// Assignment Code
var generateBtn = document.querySelector("#generate");
var choiceArr = []
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var passLength = 8;

// Write password to the #password input
function askPrompts() {
  choiceArr = [];

  var passLength = (prompt("Choose the number of characters for your password \n(Must be between 8 and 128)"));
  if (!passLength) {
    return;
  }
  if (passLength<8 || passLength>128) {
    alert("Must be between 8 and 128 characters)");
    writePassword();
  }
  else {
  alert("You must select at least one of the character types from the following 4 prompts \n(lowercase, uppercase, number, special character");
  }

  lowercase = confirm("Click OK to include lowercase characters");
  if (lowercase === true) {
console.log("confirmed");
choiceArr = choiceArr.concat(lowerCase);
  } 
  else{
    console.log("declined");
  }

 uppercase = confirm("Click OK to include uppercase characters");
  if (uppercase === true) {
    console.log("confirmed");
    choiceArr = choiceArr.concat(upperCase);
  } 
  else{
    console.log("declined");
  }

  numbers = confirm("Click OK to include numbers");
  if (numbers === true) {
    console.log("confirmed");
    choiceArr = choiceArr.concat(numbers);
  } 
  else{
    console.log("declined");
  }

  specialChars = confirm("Click OK to include special characters");
  if (specialChars === true) {
    console.log("confirmed");
    choiceArr = choiceArr.concat(specialChars);
  } 
  else{  
    console.log("declined");
  }
}  

function generatePassword() {
  var password = "";
  for (var i = 0; i < passLength; i++) {
    password = password + choiceArr(Math.floor(Math.random() * choiceArr.length));
}
return password;
}

  

function writePassword () {
  var truePrompts = askPrompts();
  var passwordText = document.querySelector("#password");

  if (truePrompts) {
    var password2 = generatePassword();
    passwordText.value = password2;}
    else {
      passwordText.value = "";
    }

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
