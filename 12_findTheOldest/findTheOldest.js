const findTheOldest = function(arr) {
    
    let ages = [];

    for (let x of Object.keys(arr)) {

        if (arr[x].hasOwnProperty('yearOfDeath')) {

            ages.push(arr[x].yearOfDeath - arr[x].yearOfBirth);

        } else {

            let date = new Date()
            ages.push(date.getFullYear() - arr[x].yearOfBirth);
        }
    }

    return arr[ages.indexOf(Math.max(...ages))]
};


// Do not edit below this line
module.exports = findTheOldest;
