// Assignment Code
var generateBtn = document.querySelector("#generate");

// parameter is userInput, we are checking that the criteria is being met, if it is not, it returns false,  on line 16, outside of if statement,
//  it's outside because if the user input is CORRECT, it doesn't go inside of the if statement, it'll return true. 
var passwordValidation = (userInput) =>  {
  if (userInput === null) { 
    alert('Please try again, cancel button pressed.')
    return false;
  }else if (userInput < 8 || userInput > 128) {
    alert('password must be within 8 and 128 characters')
    return false;
  } else if (isNaN(userInput)) {
    alert('Password must be a number')
    return false;
  } 
   return true;

}


//  variables for selection for generating the random password
let lowercaseLetters = ["a", "b", "c", "d", "e", '...']
let uppercaseLetters = ["A", "B" ,"C" , "D", "E", "..."]

var userConfirmationInput = (passwordLength) => {
  // initialize empty array to store password, check line 42. password.push stores the password here
  // check scope, password array is in function, but not inside for loops or if statements so that it can be accessed anywhere inside of the function. 
  
  let passwordArray = [];

  // these below check for if the input is true or not, when the user selects yes or no.
  let includeLowerCaseLetters = confirm("Would you like to include lower case letters?");
  let includeUpperCaseLetters = confirm('Would you like to include upper case letters?');
  let includeNumber = confirm('Would you like to include numbers?');
  let includeSpecialCharacters = confirm('Would you like to include special characters?');

  // change the name, initialzing another empty array like we're doing with password. reason why is for line 43, if array is inside of if statement, it cannot be accessed.
  let usersArray = []

  // purpose of array is for storage of letters or special characters. 
  // line below will do a check for what options have been selected.
  if (includeLowerCaseLetters && includeUpperCaseLetters) {
// this line below will add the array of lowercaseLetters and uppercaseLetters to the usersArray. 
// concat will add the users selected arrays to the usersArray
    usersArray = usersArray.concat(lowercaseLetters, uppercaseLetters)
    console.log(usersArray);
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
  var passwordLength = prompt("Pick between 8 and 128 characters for password")
  // passwordValidation returns true or false, so if it is true on line 66, it will return the values of userConfirmationInput. which is the password.
  if (passwordValidation(passwordLength)) {
    return (userConfirmationInput(passwordLength))
  } else {
    console.log('no')
  }

}
// Write password to the #password input
function writePassword() {

// on line 54, the function userConfirmationInputs returns passwordArray.join(" ") which is just our string. Password.join removes the quotes and the commas,
// Then on line 59, we are returning the value of the function userConfirmationInputs, which is what is in on line 56. 
// Line 79 will assign the value of generate passwrod to password, which on line 82 is being assigned to the component passwordText
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
