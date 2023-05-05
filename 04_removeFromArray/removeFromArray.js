const removeFromArray = function(list, ...args) {
    for (let arg in args) {
        // return args[arg];
        for (i = list.length; i >= 0; i--) {
            if (args[arg] === list[i]) {
                list.splice(i, 1);
            }
        }
    }
    return list;

    
};

// Do not edit below this line
module.exports = removeFromArray;
