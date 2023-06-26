const findTheOldest = function(arr) {

    let ages = arr.map(person => {
        if (person.hasOwnProperty('yearOfDeath')) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return new Date().getFullYear() - person.yearOfBirth;
        }
    });

    return arr[ages.indexOf(Math.max(...ages))]

}


// Do not edit below this line
module.exports = findTheOldest;
