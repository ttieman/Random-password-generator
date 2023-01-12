// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var numChars = "0123456789";
var specChars = "[]/*-+=_)(*&^%$#@!{}/?\|`~;:',<.>";
var letterChars = "qazwsxedcrfvtgbyhnujmikolp";
var upperLetterChars = letterChars.toUpperCase;

// Write password to the #password input
function writePassword() {
  passwordLength = prompt("How many characters should the password be?");
  var password = generatePassword();
  
  function generatePassword(){
    for (var i = 0; i <= passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * passwordLength);
      password = letterChars.substring(randomNumber, randomNumber + passwordLength);
    }
    return password;
    }
 
    var passwordText = document.querySelector("#password");

  passwordText.value = password;


 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

