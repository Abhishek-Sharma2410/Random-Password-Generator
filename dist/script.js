let RandomPassword = () => {
    let lengthOfPassword = document.getElementById('length').value;
    let possibilities = "";
    const lowerCasePossibilities = "abcdefghijklmnopqrstuvwxyz"; 
    const upperCasePossibilities =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberPossibilities = "0123456789";
    const symbolsPossibilities = "!@#$%&*(){}?<>,./|";
    let isupperCase = upperCase.checked;
    let islowerCase = lowerCase.checked;
    let isNumber = numbers.checked;
    let isSymbol = symbols.checked;
    let generatedPassword = "";
    let givePassword = document.getElementById('password');
    if(isupperCase) {
        possibilities += upperCasePossibilities;
    }
    if (islowerCase) {
        possibilities += lowerCasePossibilities;
    }
    if (isNumber) {
        possibilities += numberPossibilities;
    }
    if (isSymbol) {
        possibilities += symbolsPossibilities;
    }
    if (possibilities.length < 10) {
        alert("Please select the complexity of the password. ");
    } else {        
        for(let i = 0 ; i < lengthOfPassword ; i++){
            generatedPassword = generatedPassword + possibilities[Math.floor(Math.random() * possibilities.length)];
        }
    }
    givePassword.value = generatedPassword;
}

let upperCase = document.getElementById('uppercase');
let lowerCase = document.getElementById('lowercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');

let generateButton = document.getElementById('generate');
generateButton.addEventListener("click", RandomPassword);

let copyToClipboard = () => {
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Password copied to clipboard you can now paste it anywhere. ');
}

let copyClipButton = document.getElementById('copy');
copyClipButton.addEventListener("click", copyToClipboard);
