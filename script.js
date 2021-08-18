// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
    // Creating object for character pool
    const charPool = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        sym: " !#$%&'\"()*+,-./:;<=>?@[\\]^_`{|}~",
        num: "0123456789"
    };

    // Creating variables for length, characters, pwGenOut
    // Length of password from 8-128 per requirements
    var length = 0;
    // Characters to be used to generate password after user selects lower, upper, symbols, numbers 
    var characters = "";
    // Stores the pw being generated in the generatePassword function
    var pwGenOut = "";

    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the 
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters

    // prompt asking how long the password length will be
    // Do while loop to run the validation for user input, validation checks to see if non number entered and if number is between 8-128
    do {
        var userInLength = window.prompt("How many characters would you like? Minimum of 8 and Maximum of 28");
        // creating expression to see if userInLength is not a number
        var checkIfNum = isNaN(userInLength);
        if (checkIfNum) {
            // alerts user if userInLength is not a number
            alert("You must enter in a number!");
        };
        if (userInLength < 8 || userInLength > 128) {
            // alerts uers if entry is not between 8 and 128
            alert("You must enter in a number between 8 and 128!");
        }
    } while (checkIfNum || userInLength < 8 || userInLength > 128);
    // Do while loop to run the validation for user input, validation checks to see if non number entered and if number is between 8-128
    
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // Do while loop to run the confirmation for character pool, will loop if all selections are not selected
    do {
        // prompts asking for each character user wants and adds the corresponding selection criteria to character pool

        var hasLower = window.confirm("Do you want lowercase characters?");
        if (hasLower) {
            // adding lowercase selection criteria to characters pool 
            // characters += lowercase; 
            characters += charPool.lower;
        };
        var hasUpper = window.confirm("Do you want uppercase characters?");
        if (hasUpper) {
            // adding uppercase selection criteria to characters pool 
            // characters += uppercase;
            characters += charPool.upper;
        };
        var hasSymbols = window.confirm("Do you want symbol characters?");
        if (hasSymbols) {
            // adding symbols selection criteria to characters pool 
            // characters += symbols;
            characters += charPool.sym;
        };
        var hasNum = window.confirm("Do you want number characters?");
        if (hasNum) {
            // adding numbers selection criteria to characters pool 
            // characters += numbers;
            characters += charPool.num;
        };
        // Checking to see if all selections were false
        if (!hasLower && !hasUpper && !hasSymbols && !hasNum) {
            alert("You need to select at least one character option!") // Alerting user to select at least one option
        }
    } while (!hasLower && !hasUpper && !hasSymbols && !hasNum); // Do while loop to run the confirmation for character pool, will loop if all selections are not selected


    // assigning length to the user input 
    length = userInLength;
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // For loop to create the password based on the selection criteria
    for (var i = 0; i < length; i++) {
        //generates random number to select character from character pool
        pwGenOut += characters[Math.floor(Math.random() * characters.length)]
    }

    return pwGenOut;

}
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);