const fibonacci = function(n) {

    if (n < 0) {
        return "OOPS";
    }

    fibNumbers = [0,1];

    while (true) {

        if (fibNumbers.length <= n) {
            
            innerCount = 0;
            
            while (true) {

                if (fibNumbers[fibNumbers.length -2] + fibNumbers[fibNumbers.length -1] == innerCount) {
                    fibNumbers.push(innerCount);
                    break;
                } else {
                    innerCount++;
                    continue;
                }

            }

        } else {
            
            return fibNumbers[fibNumbers.length - 1];

            break;
        }
    }

};

// Do not edit below this line
module.exports = fibonacci;
