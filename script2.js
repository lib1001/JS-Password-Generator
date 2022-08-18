var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$'];
var lowerCaseArr = [];
var upperCaseArr = [];
var numberArr = [];





function writePassword() {
 var truePrompts = getPrompts();
 if(truePrompts) {
  
  var password2 = generatePassword();
  var passwordText = document.querySelector("#password");=

  passwordText.value = password2;
 }
}


function getPrompts() {
  characterLength = parseInt(prompt("How many characters do you want"));


  confirm("Would you like lowercase letters in your password?")
}
choiceArr = choiceArr.concat(upperCaseArr);

function generatePassword() {
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[index];
}
return password;
}
