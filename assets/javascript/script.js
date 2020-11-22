// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Created a function named passwordValidation to check if the parameter userInput after the prompt is true. If not it returns false and the user will have to try again.
// The return true value is outside of the if else statements because if the user input is true it does not need to go inside the if else statements. 
var passwordValidation = (userInput) => {
  if (userInput === null) {
    alert('You pressed cancel. Please try again')
    return false;
  } else if (userInput < 8 || userInput > 128) {
    alert('Please try again. Your password must be between 8 and 128 numerical characters long')
    return false;
  } else if (isNaN(userInput)) {
    alert('Please enter a valid number input')
    return false;
  }
  return true;
};


// Variables section that contain arrays with all the characters needed.
let lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specCase = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
console.log(lowCase)
// Created a function named userConfirmationInput that passes passwordLength as a parameter.
var userConfirmationInput = (passwordLength) => {

  // Initialized an empty array to store the password, passwordArray.push located under the for loop stores the password here.
  // Check scope, passwordArray is in a function, but not inside for loops or if statements so that it can be accessed anywhere inside of the function. 
  let passwordArray = [];

  // These below check for if the input is true or not, when the user selects yes or no from the confirms.
  let isLow = confirm("Would you like to include lower case letters?");
  let isUp = confirm('Would you like to include upper case letters?');
  let isNum = confirm('Would you like to include numbers?');
  let isSpec = confirm('Would you like to include special characters?');

  // Initialzed another empty array like we're doing with password. Reason why is if the array is inside of the if statement, it cannot be accessed due to scope.
  let randomSelectionArray = []
    

    if (isLow) {
      for (let i = 0; i < lowCase.length; i++) {
        randomSelectionArray.push(lowCase[i])
      }
    
     // console.log(randomSelectionArray)
    } 

    if (isUp) {
      for (let i = 0; i < upCase.length; i++) {
        randomSelectionArray.push(upCase[i])
      }
    } 

    if (isNum) {
      for (let i = 0; i < numCase.length; i++) {
        randomSelectionArray.push(numCase[i])
      }
    } 

    if (isSpec) {
      for (let i = 0; i < specCase.length; i++) {
        randomSelectionArray.push(specCase[i])
      }
    } 

    if (!isLow && !isUp && !isNum && !isSpec) {
      alert('You must select at least one option')
    }

    //console.log(randomSelectionArray);
    
  
  // For loop below will be based on the length that the user wants the password to be. 
  for (var i = 0; i < passwordLength; i++) {
    // RandomCharacter is the variable that stores the output of the functions below.
    let randomCharacter = Math.floor(Math.random() * randomSelectionArray.length);
    console.log(randomCharacter)
    // This will randomly select X amount of times (what password Length is) the position of the randomCharacter in the randomSelectionArray.
    // passwordArray.push will add the position of randomCharacter in the randomSelectionArray to the passwordArray.
    passwordArray.push(randomSelectionArray[randomCharacter])
  }
  console.log(passwordArray)
  if (passwordArray) 


  // Code below remove commas and quotation marks.
  return passwordArray.join("");
};


var generatePassword = () => {
  var passwordLength = prompt('Please enter a numerical password length that is between 8 and 128 characters long')
  // PasswordValidation returns true or false, so if it is true, it will return the values of userConfirmationInput. which is the password.
  if (passwordValidation(passwordLength)) {
    return (userConfirmationInput(passwordLength));
  } else {
    console.log('no');
  }


};
// Write password to the #password input
const writePassword = () => {

  // The function userConfirmationInput returns passwordArray.join(" ") which is just our string. passwordArray.join removes the quotes and the commas.
  // Then in the generatePassword function, we are returning the value of the function userConfirmationInput. 
  // Variable password will assign the value of generatePassword to password, which is being assigned to the component passwordText.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

