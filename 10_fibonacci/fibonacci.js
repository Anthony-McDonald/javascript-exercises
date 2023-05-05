const fibonacci = function(input, secondLastVal = 0, lastVal = 1, counter = 2) {
    if (input < 0) {
        return "OOPS"
    }
    if (input == 0) {
        return 0;
    }
    if (input == 1) {
        return 1;
    }
    if (counter == input) {
        return secondLastVal + lastVal;
    }
    return fibonacci(input, lastVal, lastVal + secondLastVal, counter += 1);
}

// Do not edit below this line
module.exports = fibonacci;
