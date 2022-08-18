while (true) {
  var passLength = parseInt(userChoice);
if (isNaN(passLength)) {
  window.alert("Must be a number");
  return window.prompt("Choose the number of characters for your password \n(Must be between 8 and 128)");
}
else if (!passLength) {
  return;
}
else if (passLength < 8 || passLength > 128) {
  window.alert("Must be between 8 and 128 characters");
  return window.prompt("Choose the number of characters for your password \n(Must be between 8 and 128)");
}
else {break}
}