// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Choose the number of characters for your password (Must be between 8 and 128)");
  if (passLength<8 || passLength>128) {
    alert("Must be between 8 and 128 characters");
    writePassword();
  }
  else {
  }

  var passLowercase = confirm("Would you like to include lowercase characters?"); 

  var passUppercase = confirm("Would you like to include uppercase characters?");

  var passNumbers = confirm("Would you like to include numbers?");

  var passSpecialChars = confirm("Would you like to include special characters?");

  var generatePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  prompt("Choose the number of characters for your password (Must be between 8 and 128)");

  passwordText.value = password;

}

function generatePassword() {
  
}


  // function generatePassword(){
  //   determineLength();
  //   console.log(passwordLength);
  //   determineUppercase();
  //   console.log(uppercaseCheck);
  //   determineNumbers();
  //   console.log(numberCheck);
  //   determineSpecial();
  //   console.log(specialCheck);
  
  // var characters = lowercaseChar;
  // var password = "";
  // if (uppercaseCheck && numberCheck && specialCheck){
  //   characters += uppercaseChar + numberChar + specialChar;
  
  // }else if (uppercaseCheck && numberCheck){
  //   characters += uppercaseChar + numberChar;
  
  // }else if (numberCheck && specialCheck){
  //   characters += numberChar + specialChar;
  
  // }else if (uppercaseCheck && specialCheck){
  //   characters += uppercaseChar + specialChar;
  
  // }else if (uppercaseCheck){
  //   characters += uppercaseChar;
  
  // }else if(numberCheck){
  //   characters += numberChar;
  
  // }else if (specialCheck){
  //   characters += specialChar;
  
  // }else{
  //   characters === lowercaseChar;
  // }
  
  //   for(var i = 0; i < passwordLength; i++){
  //     password += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   return password;
  // }


var generatePassword
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  prompt("Choose the number of characters for your password (Must be between 8 and 128)");

  passwordText.value = password;

}

writePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
