const getTheTitles = function(books) {
    let returnList = []
    for (let book of books) {
        for (key in book) {
            if (key == "title") {
                returnList.push(book[key])
            }
        }
    }
    return returnList
};

// Do not edit below this line
module.exports = getTheTitles;
