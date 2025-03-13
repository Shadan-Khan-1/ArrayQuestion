function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return "Not Found Input number";

    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    else return binarySearchRecursive(arr, target, left, mid - 1);
}

// Example usage:
const sortedArr = [10, 20, 30, 40, 50, 60];
console.log(binarySearchRecursive(sortedArr, 50)); // Output: 2
console.log(binarySearchRecursive(sortedArr, 100)); // Output: -1