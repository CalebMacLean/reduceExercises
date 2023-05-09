// Extract Value Function
function extractValue(arr, key) {
    return arr.reduce((accum,obj) => {
        accum.push(obj[key]);
        return accum;
    }, [])
};

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

// Vowel Count Function
function vowelCount(str) {
    const vowels = 'aeiou';
    const strArr = Array.from(str);
    return strArr.reduce((obj,nxtChar) => {
        let lowerCased = nxtChar.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1) {
            if(obj[lowerCased]) {
                obj[lowerCased]++;
            } else {
                obj[lowerCased] = 1;
            }
        }
        return obj;
    }, {})
};

// Add Key and Value Function
function addKeyAndValue(arr, key, val) {
    return arr.reduce((acc, nxtObj, idx) => {
        arr[idx][key] = val;
        return acc;
    }, arr)
};

// Partition Function
function partition(arr, callback) {
    return arr.reduce((acc, next, idx) => {
        if(callback(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]])
};

function isEven(num) {
    return num % 2 === 0;
}

const numArr = [1,2,3,4,5,6,7,8];