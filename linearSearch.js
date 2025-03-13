function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return { index: i, value: arr[i] };
        }
    }
    return -1; // Element not found
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 15];
console.log(linearSearch(arr, 15)); // Output: 2
console.log(linearSearch(arr, 100)); // Output: -1
