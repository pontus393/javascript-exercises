const sumAll = function(firstInt, secondInt) {

    let result = 0;
    let start = Math.min(firstInt, secondInt);
    let end = Math.max(firstInt, secondInt);

    if (firstInt < 0 || secondInt < 0 || typeof(firstInt) != "number" || typeof(secondInt) != "number") {
        return "ERROR";
    } else {

        for (let i = start; i <= end; i++) {
            result += i;
        }


    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
