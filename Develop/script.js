// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  var answered = 0;
  var final = '';
  var lengthPrompt = prompt("Please enter what you want as your password length 8 to 128 characters");
  while(lengthPrompt < 8 || lengthPrompt > 128 ){
    lengthPrompt = prompt("Please enter what you want as your password length 8 to 128 characters");
  }
  while( answered == 0){
    var password='';
    alert('at least one character type should be selected');
  var lowerPrompt = prompt('Would you like include lowercase characters? Enter Y or N');
  while(lowerPrompt != 'N' && lowerPrompt != 'Y' ){
    lowerPrompt = prompt('Would you like include lowercase, uppercase, numeric, and/or special characters? enter Y or N');
  }
  if(lowerPrompt == 'Y'){
    password += "abcdefghijklmnopqrstuvwxyz";
    answered ++;
  }

  var upperPrompt = prompt('Would you like include uppercase characters? Enter Y or N');
  while(upperPrompt != 'N' && upperPrompt != 'Y' ){
    upperPrompt = prompt('Would you like include uppercase characters? Enter Y or N');
  }
  if(upperPrompt == 'Y'){
    password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    answered ++;
  }

  var numericPrompt = prompt('Would you like include numeric characters? Enter Y or N');
  while(numericPrompt != 'N' && numericPrompt != 'Y' ){
    numericPrompt = prompt('Would you like include numeric characters? Enter Y or N');
  }
  if(numericPrompt == 'Y'){
    password+= '1234567890';
    answered ++;
  }

  var specialPrompt = prompt('Would you like include special characters? Enter Y or N');
  while(specialPrompt != 'N' && specialPrompt != 'Y' ){
    specialPrompt = prompt('Would you like include special characters? Enter Y or N');
  }
  if(specialPrompt == 'Y'){
    password += "[$&+,:;=?@#|'<>.-^*()%!]";
    answered ++;
  }
}
for( var i = 0; i < lengthPrompt; i++){
  var randInt = Math.floor(Math.random() * password.length);
  final += password[randInt];
}

return final;

}
function writePassword() {
  var password = generatePassword();
  alert('Your password is '+ password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// {
//   if(writePassword.key == 'click'){
//     console.log('heyyyeyeyyeyeyye');
//     alert('heyyyyy');
//   }
// }

