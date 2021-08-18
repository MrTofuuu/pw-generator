// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
    // Creating object for character pool
    var charPool = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        sym: " !#$%&'\"()*+,-./:;<=>?@[\\]^_`{|}~",
        num: "0123456789"
    };

    // Creating strings to create the password  
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var symbols = " !#$%&'\"()*+,-./:;<=>?@[\\]^_`{|}~";
    var numbers = "0123456789";

    var length = 0;
    var characters = "";
    var pwGenOut = "";
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // Do while loop to run the confirmation for character pool, will loop if all selections are not selected
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
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



    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters

    // prompt asking how long the password length will be
    do {
        var userInLength = window.prompt("How many characters would you like?");
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