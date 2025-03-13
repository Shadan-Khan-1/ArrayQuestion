// Find the Missing number in an array

let arr = [1, 2, 3, 5, 6, 7, 8];
function findMissingNum(arr) {
    let n = arr.length + 1; // Since one number is missing
    let expectedSum = (n * (n + 1)) / 2;
    let sumOfArr = 0
    for (const a of arr) {
        sumOfArr = a + sumOfArr
    }
    let missingNum = expectedSum - sumOfArr
    console.log('expectedSum: ', expectedSum);
    console.log('sumOfArr: ', sumOfArr);
    return { "missingNum": missingNum }
}

console.log('findMissingNum(arr): ', findMissingNum(arr));