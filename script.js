// Dom element
const generateBtn = document.querySelector("#generate");


// Listener
generateBtn.addEventListener("click", function() {
    //prompts on click
    const lengthP = prompt('How many characters would you like your password to have?');
    const symbolsP = confirm('Would you like to use symbol characters in your password?');
    const numbersP = confirm('Would you like it to have numbers?');
    const lowerP = confirm('would you like to include lowercase characters?');
    const upperP = confirm('would you like to include uppercase characters?');
    
    if (lengthP < 8) {
        alert ('Please enter atleast 8 characters.')
    } else (lengthP > 128)
        alert ('Please enter below 128 characters')
    
    //change from string to number
    const length = +lengthP;
    generatePassword(length, symbolsP, numbersP, lowerP, upperP)
    //Generate password function
function generatePassword(length, symbol, number, lower, upper) {
    let generatedPassword = '';
    
    const typesCount = lower + upper + number + symbol;
    console.log('typesCont: ', typesCount);
    //filter
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    console.log('typesArr: ', typesArr);

    if(typesCount === 0) {
        return '';
    }
    for(let i = 0; i < length; i+= typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log('funcName: ', funcName);
            
            generatedPassword += randomFunc[funcName]();
        });

    }
    const finalPassword = (generatedPassword)
    document.getElementById('password').setAttribute('placeholder', finalPassword);
}});


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Generator function charCode - http://www.net-comber.com/charset.html
// Random Generator
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+={}[]<>?'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
