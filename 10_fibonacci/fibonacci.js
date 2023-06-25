const fibonacci = function(n) {
    
    if (n < 0) {return "OOPS"}
    
    let fibonacci = [0,1];

    for (i = 1; i < n; i++) {
        fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
    }

    return fibonacci[fibonacci.length - 1];

    

}

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
