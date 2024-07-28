const reverseString = function(string) {
    // 1. Every character of the string is put inside an array
    // 2. The array is reversed
    // 3. The array elements get concatenated and become a string
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
