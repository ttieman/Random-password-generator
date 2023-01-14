// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterSets = {         //object defining character sets to be applied in password generation 
 numChars: "0123456789",  
 specChars: "*&^%$#@!?",
 letterChars: "qazwsxedcrfvtgbyhnujmikolp",
 upperLetterChars: "QWERTYUIOPASDFGHJKLZXCVBNM"
}

  var userInput = {       //object to store all the user inputs from prompts
passwordLength: 8,
isSpecChars: true,
isUpperCase: true,
isLowerCase: true,
isNumberChars: true
}


function promptTheUser(){
  userInput.passwordLength = prompt("How many characters should the password be?\nMinimum of 8 Characters.\nMaximum of 128 Characters.");
  if (userInput.passwordLength < 8|userInput.passwordLength > 128 | ) // if statement checking user inputs
  userInput.isSpecChars = prompt("Should it include special characters?\nTrue or False?");
  userInput.isUpperCase = prompt("Should it include uppercase letters?\nTrue or False?");       //this function prompts the user then returns the updated values to the user input object
  userInput.isLowerCase = prompt("Should it include lowercase letters?\nTrue or False?");
  userInput.isNumberChars = prompt("Should it include numbers?\nTrue or False?");

  return userInput;
}

function generatePassword(){
  var text = "";
  for (let i = 0; i < userInput.passwordLength; i++) {
    text += characterSets.upperLetterChars[(Math.floor(Math.random() * characterSets.upperLetterChars.length))];
  }
  return text;
}

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(userInput);
console.log(characterSets);
promptTheUser();
console.log(userInput);