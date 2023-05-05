const palindromes = function (input) {
    let inputList = input.split("");
    inputList = listSimplifier(inputList);
    let lowercaseLetters = inputList.map(letter => letter.toLowerCase());
    let listReversed = listReverser(lowercaseLetters);
    
    return arraysEqual(lowercaseLetters, listReversed)


}

function arraysEqual(a, b) {
    let same = true;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            same = false
        }
    }
    return same;
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
  
  function listSimplifier(list) {
      for (let i = list.length - 1; i >= 0; i--) {
          if (!isLetter(list[i])) {
              list.splice(i, 1)
          } 
          
      }
      
      return list
  }

function listReverser(list) {
    listToReturn = [];
    for (let i = list.length - 1; i >= 0; i--) {
        listToReturn.push(list[i])
    }
    return listToReturn;
}

// Do not edit below this line
module.exports = palindromes;
