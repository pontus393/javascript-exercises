const getTheTitles = function(arr) {

    titleArr = [];

    for (let x of arr.keys()) {
        titleArr.push(arr[x].title);
    }

    return titleArr;

};

// Do not edit below this line
module.exports = getTheTitles;
