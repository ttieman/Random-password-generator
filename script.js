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

var generationString = "" // this is the string that is updated with the users choices and allows for different string configurations

function lengthPrompt(){
  var value = prompt("How many characters should the password be?\nMinimum of 8 Characters.\nMaximum of 128 Characters.");
  if (value < 8 || value > 128 || value.isNaN){
      alert("Please enter a value between 8 and 128!");
      lengthPrompt();                                               
  } else{
    userInput.passwordLength = value;         // this determins the length of the string based on used input
    return userInput.passwordLength;
  }
}

function boolSpecChars() {
 var specCharValue;
 if(confirm("Should it include %Special Characters?\nTrue Or False?") === true){
  specCharValue = true;
  userInput.isSpecChars = specCharValue;
  generationString = generationString + characterSets.specChars;
  return generationString;                    
}else{                                    // this determins wether or not to include special characters
  specCharValue = false;
  userInput.isSpecChars = specCharValue;            
  return userInput.isSpecChars;
}
}

function boolUpperCase(){
  var upperCaseValue 
  if(confirm("Should it include UPPERCASE letters?\nTrue Or False?") === true){
    upperCaseValue = true;
    userInput.isSpecChars = upperCaseValue;
    generationString = generationString + characterSets.upperLetterChars
    return generationString;
  }else{                                        //this determins wether or not to include upper case letters
    upperCaseValue = false;
    userInput.isUpperCase = upperCaseValue;
    return userInput.isUpperCase;
  }
}


function boolLowerCase(){
  var lowerCaseValue 
  if(confirm("Should it include lowercase letters?\nTrue Or False?") === true){
    lowerCaseValue = true;
    generationString = generationString + characterSets.letterChars;
    return generationString;
  }else{
    lowerCaseValue = false;                             //this determins wether or not to include lowercase case letters
    userInput.isLowerCase = lowerCaseValue;
    return userInput.isLowerCase;
  }
}

function boolNumberChars(){
  var numCharValue
  if(confirm("Should it include #number characters?\nTrue Or False?") === true){
    numCharValue = true;
    userInput.isNumberChars = numCharValue;
    generationString = generationString + characterSets.numChars;
    return generationString;
  }else{                                                          // determins wether or not to include number characters
    numCharValue = false;
    userInput.isNumberChars = numCharValue;
    return userInput.isNumberChars;
  }
}

function checkForString(){
  if(generationString === ""){
    alert("No Characters selected try again!")
    promptTheUser();
  }                                     // checks to make sure there is atleast one number string included and will reprompt the user if there isnt 
  else{
    return;
  }
}

function promptTheUser(){  // this prompt handles user input and makes sure there are atleast one character set included 
  lengthPrompt();
  boolSpecChars();
  boolUpperCase();
  boolLowerCase();
  boolNumberChars();
  checkForString();
  return userInput;
}

function generatePassword(){           // this function generates the password 
  var text = "";
  for (let i = 0; i < userInput.passwordLength; i++) {
    text += generationString[(Math.floor(Math.random() * generationString.length))];
  }
  return text;
}

// Write password to the #password input
function writePassword() {            //this funtion writes the password into the html 
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);             

console.log(userInput); // the consol.log commands were used for debugging purposes during the development of this application to track information
console.log(characterSets);       
promptTheUser(); // prompts the user when page is loaded 
console.log(userInput);