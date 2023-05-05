const reverseString = function(inputString) {
    inputArray = inputString.split("");
    toOut = ""
    let i = inputArray.length - 1;
    for (i; i >= 0; i--) {
        // toOut.concat(inputArray[i]);
        toOut = toOut.concat(inputArray[i]);
    }
    return toOut;
};

// Do not edit below this line
module.exports = reverseString;
