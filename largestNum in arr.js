// Find the largest number in an array
let arr = [1, 15, 5, 97, 6, 96]
function findLargestNum(arr) {
    let largestNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i]
        }
    }
    return { "largestNum": largestNum }
}
console.log('findLargestNum(arr): ', findLargestNum(arr));