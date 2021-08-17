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
    do{
        // prompts asking for each character user wants and adds the corresponding selection criteria to character pool
        
        var hasLower = window.confirm("Do you want lowercase characters?");
        if (hasLower) {
            // adding lowercase selection criteria to characters pool 
            characters += lowercase;
        };
        var hasUpper = window.confirm("Do you want uppercase characters?");
        if (hasUpper) {
            // adding uppercase selection criteria to characters pool 
            characters += uppercase;
        };
        var hasSymbols = window.confirm("Do you want symbol characters?");
        if (hasSymbols) {
            // adding symbols selection criteria to characters pool 
            characters += symbols;
        };
        var hasNum = window.confirm("Do you want number characters?");
        if (hasNum) {
            // adding numbers selection criteria to characters pool 
            characters += numbers;
        };
        // Checking to see if all selections were false
        if (!hasLower && !hasUpper && !hasSymbols && !hasNum){
            alert("You need to select at least one character option!")  // Alerting user to select at least one option
        }
    } while(!hasLower && !hasUpper && !hasSymbols && !hasNum); // Do while loop to run the confirmation for character pool, will loop if all selections are not selected
    
    
    
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters

    // prompt asking how long the password length will be
    var userInLength = window.prompt("How many characters would you like?");
    // removing typeof(userInLength) !== 'number' || to check to see if that was causing while loop to run forever
    // while (userInLength < 8 || userInLength > 128) {
    //     window.alert("Password is minimum length of 8 and maximum of 128 characters. Please input how many characters");
    // }
    // //-----------------------------------------------------------------------------------------------------------------------------------
    //maybe i don't need the if else if i just use a while loop
    //if (userInLength < 8) { // checking to see if minimum character is met 
    //    window.alert("Minimum of 8 characters, please enter desired character length again");
    //    userInLength = window.prompt("How many characters would you like?");
    //} else if (userInLength > 128) { // checking to see if maximum charcter isn't exceeded
    //    window.alert("Maximum of 128 characters, please enter desired character length again");
    //    userInLength = window.prompt("How many characters would you like?");
    //} else if (typeof(userInLength) !== 'number') { // checking to see user entered any non numbers 
    //    window.alert("Please enter in a number!");
    //    userInLength = window.prompt("How many characters would you like?");}
    //-----------------------------------------------------------------------------------------------------------------------------------

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

    password = pwGenOut;
    //alert("Password: " + password);
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
