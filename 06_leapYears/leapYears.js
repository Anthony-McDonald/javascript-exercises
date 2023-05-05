const leapYears = function(yearEntered) {
    if (yearEntered % 4 == 0) {
        if (yearEntered % 100 == 0) {
            if (yearEntered % 400 == 0) {
                return true;
            }
            return false;
        }

        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
