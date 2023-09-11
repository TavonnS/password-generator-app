
var generateBtn = document.getElementById("generate")

var includeUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var includeLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
var includeNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  
var includeSpecial = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',' , ')', '(', '}', '{', ']', '[','~', '-', '_', '.',]

var totalCharacters = []
 
function generatePassword (){
var passLength = prompt("What is the required length of your password?")

if (passLength < 8 || passLength > 128) {
  alert("Please enter a length greater than 7 and less than 128")
  return 
}

var uppers = confirm("Do you need uppercase characters included?")

if (uppers) {
  totalCharacters=totalCharacters.concat(includeUppercase)
}

var lowers = confirm("Do you need lowercase characters included?")

if (lowers) {
  totalCharacters=totalCharacters.concat(includeLowercase)
}

var numeric = confirm("Do you need numeric characters included?")

if (numeric) {
  totalCharacters=totalCharacters.concat(includeNumeric)
}

var specials = confirm("Do you need special characters included?")

if (specials) {
  totalCharacters=totalCharacters.concat(includeSpecial)
}
console.log(totalCharacters);
var password = []


for (let i=0; i < passLength; i++) {
  var randomIndex = Math.floor(Math.random()*totalCharacters.length)
  var randomChar = totalCharacters[randomIndex]
  password=password.concat(randomChar)
  
}

return password.join("");

}



// Write password to the #password input

function writePassword( ) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
