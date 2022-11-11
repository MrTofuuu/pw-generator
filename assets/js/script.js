// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

// Shuffle Fucntion
const shufflePW = pwGenOut => {
  // Convert String to array
  let arr = pwGenOut.split("");

  arr.sort(function () {
    return 0.5 - Math.random();
  });
  // Convert Array to string
  pwGenOut = arr.join("");
  // Return shuffled string
  return pwGenOut;
}

// Randomizer
const randomizer = char => {
  return Math.floor(Math.random() * char.length);
}

const generatePassword = () =>{
  // Creating object for character pool
  const charPool = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    sym: " !#$%&'\"()*+,-./:;<=>?@[\\]^_`{|}~",
    num: "0123456789",
  };

  // Creating variables for length, characters, pwGenOut
  // Length of password from 8-128 per requirements
  let length = 0;
  // Characters to be used to generate password after user selects lower, upper, symbols, numbers
  let characters = "";
  // putting a number to selected crieria used
  let criteria = 0;
  // Stores the pw being generated in the generatePassword function
  let pwGenOut = "";
  let hasLower;
  let hasUpper;
  let hasSymbols;
  let hasNum;
  let checkIfNum;
  let userInLength;
  // prompt asking how long the password length will be
  // Do while loop to run the validation for user input,
  // validation checks to see if non number entered and if number is between 8-128
  do {
    userInLength = window.prompt(
      "How many characters would you like? Minimum of 8 and Maximum of 128"
    );
    // creating expression to see if userInLength is not a number
    checkIfNum = isNaN(userInLength);
    if (checkIfNum) {
      // alerts user if userInLength is not a number
      alert("You must enter in a number!");
    }
    if (userInLength < 8 || userInLength > 128) {
      // alerts uers if entry is not between 8 and 128
      alert("You must enter in a number between 8 and 128!");
    }
  } while (checkIfNum || userInLength < 8 || userInLength > 128);
  // Do while loop to run the validation for user input,
  // validation checks to see if non number entered and if number is between 8-128

  // Do while loop to run the confirmation for character pool,
  // will loop if all selections are not selected
  do {
    // prompts asking for each character user wants
    // and adds the corresponding selection criteria to character pool
    // TODO: Maybe refactor to use a specialized function
    hasLower = window.confirm("Do you want lowercase characters?");
    hasUpper = window.confirm("Do you want uppercase characters?");
    hasSymbols = window.confirm("Do you want symbol characters?");
    hasNum = window.confirm("Do you want number characters?");
    // TODO: Maybe use a for loop since this looks repeated? 
    if (hasLower) {
      // adding lowercase selection criteria to characters pool
      characters += charPool.lower;
      // forcing an add if crieteria is selected
      pwGenOut += charPool.lower[randomizer(charPool.lower)];
      criteria++;
      console.debug("pw so far: " + pwGenOut);
      console.debug("amount of selected criteria: " + criteria);
    }
    
    if (hasUpper) {
      // adding uppercase selection criteria to characters pool
      characters += charPool.upper;
      // forcing an add if crieteria is selected
      pwGenOut += charPool.upper[randomizer(charPool.upper)];
      criteria++;
      console.debug("pw so far: " + pwGenOut);
      console.debug("amount of selected criteria: " + criteria);
    }
    
    if (hasSymbols) {
      // adding symbols selection criteria to characters pool
      characters += charPool.sym;
      // forcing an add if crieteria is selected
      pwGenOut += charPool.sym[randomizer(charPool.sym)];
      criteria++;
      console.debug("pw so far: " + pwGenOut);
      console.debug("amount of selected criteria: " + criteria);
    }
    
    if (hasNum) {
      // adding numbers selection criteria to characters pool
      characters += charPool.num;
      // forcing an add if crieteria is selected
      pwGenOut += charPool.num[randomizer(charPool.num)];
      criteria++;
      console.debug("pw so far: " + pwGenOut);
      console.debug("amount of selected criteria: " + criteria);
    }
    // Checking to see if all selections were false
    if (!hasLower && !hasUpper && !hasSymbols && !hasNum) {
      alert("You need to select at least one character option!");
      // Alerting user to select at least one option
    }
  } while (!hasLower && !hasUpper && !hasSymbols && !hasNum);
  // Do while loop to run the confirmation for character pool,
  // will loop if all selections are not selected

  // Assigning length to the user input
  length = userInLength - criteria;

  // Creates the password
  for (let i = 0; i < length; i++) {
    pwGenOut += characters[randomizer(characters)];
  }
  // shuffling final result
  console.debug("PW before shuffle: \n" + pwGenOut);
  pwGenOut = shufflePW(pwGenOut);
  console.debug("PW after shuffle: \n" + pwGenOut);

  // Outputs the generated pw for us by anything that calls the generatePassword function
  return pwGenOut;
}

// Write password to the #password input
function writePassword() {
  passwordText.value = "";
  let password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
