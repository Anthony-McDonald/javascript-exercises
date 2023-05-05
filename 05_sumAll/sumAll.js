const sumAll = function(firstNum, secondNum) {
    if ((typeof firstNum) != 'number' || (typeof secondNum) != 'number') {
        return "ERROR"
    } else if (firstNum < 0 || secondNum < 0) {
        return "ERROR"
    }
    
    if (secondNum < firstNum) {
        let temp = firstNum;
        firstNum = secondNum;
        secondNum = temp;
    }

    let iter = firstNum;
    let toReturn = secondNum;

    while (true) {
        
        secondNum -= 1;
        toReturn += secondNum;

        if (secondNum == firstNum) {
            break;
        }
    }

    return toReturn;

};

// Do not edit below this line
module.exports = sumAll;
