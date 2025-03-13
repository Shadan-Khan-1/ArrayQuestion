const arr = [10, 20, 30, 40, 50, 60];
function binarySearch(arr, target) {
    let low = 0
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] === target) {
            return { "index number ": mid, "and index value is ": arr[mid] }; // Element found
        } else if (arr[mid] < target) {  // if arr[mid] less then target then search in right half
            low = mid + 1; // Search right half
        } else {
            high = mid - 1; // Search left half
        }
    }
    return "Element  not found";

}
let target = 20
console.log(binarySearch(arr, target));

// binary search work on sorted array

// step - 1: -  Set low = 0 and high = arr.length - 1.  then check in while loop condition low less then or equal high 
// step - 2: - Compare arr[mid] with the target:
// step - 3: - If arr[mid] === target, return the index.
//             If arr[mid] < target, search in the right half(low = mid + 1).
//             If arr[mid] > target, search in the left half(high = mid - 1).
// step - 1: - Repeat until low > high.If not found, return -1.