const repeatString = function(text, repeatTimes) {
    toReturn = ""

    for (let i = 0; i < repeatTimes; i++) {
        toReturn = toReturn.concat(text);
    }
    return toReturn
};

// Do not edit below this line
module.exports = repeatString;
