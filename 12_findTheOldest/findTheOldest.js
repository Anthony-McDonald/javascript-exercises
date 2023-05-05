const findTheOldest = function(people) {
    oldest = 0
    personToReturn = []
    
    for (person of people) {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = 2023;
        }
        if (person.yearOfDeath - person.yearOfBirth > oldest) {
            oldest = person.yearOfDeath - person.yearOfBirth;
            personToReturn = person
        }
    }
    return personToReturn;
}
// Do not edit below this line
module.exports = findTheOldest;
