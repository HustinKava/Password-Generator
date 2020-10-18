// Assignment Code
var generateBtn = document.querySelector("#generate");

// parameter is userInput, we are checking that the criteria is being met, if it is not, it returns false,  on line 16, outside of if statement,
//  it's outside because if the user input is CORRECT, it doesn't go inside of the if statement, it'll return true. 
var passwordValidation = (userInput) =>  {
  if (userInput === null) { 
    alert('You pressed cancel. Please try again')
    return false;
  }else if (userInput < 8 || userInput > 128) {
    alert('Please try again. Your password must be between 8 and 128 numerical characters long')
    return false;
  } else if (isNaN(userInput)) {
    alert('Please enter a valid number input')
    return false;
  } 
   return true;
};


//  variables for selection for generating the random password
let lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numCase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specCase = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var userConfirmationInput = (passwordLength) => {
  // initialize empty array to store password, check line 42. password.push stores the password here
  // check scope, password array is in function, but not inside for loops or if statements so that it can be accessed anywhere inside of the function. 
  
  let passwordArray = [];

  // these below check for if the input is true or not, when the user selects yes or no.
  let isLow = confirm("Would you like to include lower case letters?");
  let isUp = confirm('Would you like to include upper case letters?');
  let isNum = confirm('Would you like to include numbers?');
  let isSpec = confirm('Would you like to include special characters?');

  // change the name, initialzing another empty array like we're doing with password. reason why is for line 43, if array is inside of if statement, it cannot be accessed.
  let usersArray = []

  // If no option is selected
  if (!isLow && !isUp && !isNum && !isSpec) {
    alert('You must select at least one option')
    return false;
  
  // purpose of array is for storage of letters or special characters. 
  // line below will do a check for what options have been selected.
  } else if (isLow && isUp && isNum && isSpec) {
// this line below will add the array of lowCase and upCase to the usersArray. 
// concat will add the users selected arrays to the usersArray
    usersArray = usersArray.concat(lowCase, upCase, numCase, specCase)
    console.log(usersArray);

    //Three options true
  } else if (isLow && isUp && isNum) {
    usersArray = usersArray.concat(lowCase, upCase, numCase);
  } else if (isLow && isUp && isSpec) {
    usersArray = usersArray.concat(lowCase, upCase, specCase);
  } else if (isLow && isNum && isSpec) {
    usersArray = usersArray.concat(lowCase, numCase, specCase);
  } else if (isUp && isNum && isSpec) {
    usersArray = usersArray.concat(upCase, numCase, specCase);
  

    //Two options true
  } else if (isLow && isUp) {
    usersArray = usersArray.concat(lowCase, upCase);
  } else if (isLow && isNum) {
    usersArray = usersArray.concat(lowCase, numCase);
  } else if (isLow && isSpec) {
    usersArray = usersArray.concat(lowCase, specCase);
  } else if (isUp && isSpec) {
    usersArray = usersArray.concat(upCase, specCase);
  } else if (isUp && isSpec) {
    usersArray = usersArray.concat(upCase, specCase);
  } else if (isNum && isSpec) {
    usersArray = usersArray.concat(numCase, specCase);


    //One option true
  } else if (isLow) {
    usersArray = usersArray.concat(lowCase);
  } else if (isUp) {
    usersArray = usersArray.concat(upCase);
  } else if (isNum) {
    usersArray = usersArray.concat(numCase);
  } else if (isSpec) {
    usersArray = usersArray.concat(specCase);
  }

  // for loop below will be based on the length that the user wants the password to be. 
  for (var i = 0; i < passwordLength; i++ ){
    // randomCharacter stores the output of the functions below, 
    let randomCharacter = Math.floor(Math.random() * usersArray.length);
    // this will randomly select X amount of times (what password Length is) the position of the randomCharacter in the usersArray
    // password.push will add the position of randomCharacter in the usersArray to the password array
    passwordArray.push(usersArray[randomCharacter] )
  }
  // code below remove commas and quotation marks.
  return passwordArray.join("");
}


var generatePassword = () => {
  var passwordLength = prompt('Please choose a password between 8 and 128 characters')
  // passwordValidation returns true or false, so if it is true on line 66, it will return the values of userConfirmationInput. which is the password.
  if (passwordValidation(passwordLength)) {
    return (userConfirmationInput(passwordLength))
  } else {
    console.log('no')
  }

}
// Write password to the #password input
const writePassword = () => {

// on line 54, the function userConfirmationInputs returns passwordArray.join(" ") which is just our string. Password.join removes the quotes and the commas,
// Then on line 59, we are returning the value of the function userConfirmationInputs, which is what is in on line 56. 
// Line 79 will assign the value of generate passwrod to password, which on line 82 is being assigned to the component passwordText
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
