// // Search the element in an array
const arr = [1, 3, 4, 8, 2, 44, 1, 9];
let a = 3;
//console.log("Search result:", linearSearch(a));
console.log("Search result by linearSearchUsingForEachLoop :", linearSearchUsingForEachLoop(a));

function linearSearch(element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            console.log("element found ", arr[i])
            return true
        }
    }
    console.log("Element not found:", element);
    return false;
}


/// by using foreach loop
function linearSearchUsingForEachLoop(element) {
    let found = false;
    arr.forEach((n) => {
        if (n === a) {
            console.log("Element found in ForEachLoop :", n);
            found = true;
        }
    });

    if (!found) {
        console.log("Element not found in ForEachLoop :", a);
    }
    return found;
}

