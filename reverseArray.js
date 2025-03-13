// Reverse a given array

let arr = [1, 2, 3, 5, 6, 17, 8];
let str = "shadan";

function reverseArr(arr) {
    let left = 0, right = arr.length - 1;
    console.log('arr.length: ', arr.length);
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr
}

// Using Recursion
function reverseArray(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return arr;

    [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap
    return reverseArray(arr, start + 1, end - 1);
}

console.log("reverseArray using Manual Approach ", reverseArr(arr));
console.log("reverseArray using recursive method", reverseArray(arr));
console.log("reverseArray using recursive method in string", reverseArray(arr.join('')));
console.log("reverseString using Manual Approach", reverseString(str));
console.log("reverseString using reverse method", str.split(''));
console.log("reverseString using reverse method", str.split('').reverse());
console.log("reverseString using reverse method", str.split('').reverse().join(''));



function reverseString(str) {
    let reverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]

    }
    return reverseStr
}