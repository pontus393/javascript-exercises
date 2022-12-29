const palindromes = function (string) {

    const string1 = string.toLowerCase().replace(/[^a-z]/gi, '')

    const string2 = string1.split("").reverse().join("")

    return string1 === string2;

};

// Do not edit below this line
module.exports = palindromes;
