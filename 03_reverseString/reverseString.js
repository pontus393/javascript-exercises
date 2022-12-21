const reverseString = function(string) {

    let stringChars = string.split("");
    let reversedString = "";

    for (let i = 1; i <= stringChars.length; i++) {
        reversedString += stringChars[stringChars.length - i];
    }

    return reversedString;
};

console.log(reverseString("hello world"));

// Do not edit below this line
module.exports = reverseString;
