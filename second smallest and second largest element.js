// // Find the second smallest and second largest element in an array
let arr = [1, 15, 5, 97, 6, 96, 4, 9, 5]
// console.log('arr: ', arr.length);
// function secondSmallest(arr) {
//     if (arr.length < 2) return null; // Edge case: Not enough elements
//     let secondSmallest = Infinity
//     let smallest = Infinity
//     for (let i = 0; i < arr.length; i++) {
//         // console.log("index", i, "value", arr[i]);
//         if (arr[i] < smallest) {
//             secondSmallest = smallest
//             smallest = arr[i]
//         } else if (arr[i] > smallest && arr[i] < secondSmallest) {
//             secondSmallest = arr[i];
//         }
//     }
//     // return secondSmallest
//     return secondSmallest === Infinity ? null : secondSmallest;
// }
// console.log("secondSmallest", secondSmallest(arr));


function secondSmallest(arr) {
    if (arr.length < 2) return null; // Edge case: Not enough elements

    let smallest = Infinity;
    let secondSmallest = Infinity;
    let largest = - Infinity
    let secondLargest = - Infinity

    // for (let i = 0; i < arr.length; i++) {   //     use any type of loop
    //     if (arr[i] < smallest) {
    //         secondSmallest = smallest;
    //         smallest = arr[i];
    //     } else if (arr[i] >= smallest && arr[i] < secondSmallest) {
    //         secondSmallest = arr[i];
    //     }
    // }
    // return secondSmallest === Infinity ? null : secondSmallest;


    for (const a of arr) {
        if (a < smallest) {
            secondSmallest = smallest;
            smallest = a;
        } else if (a >= smallest && a < secondSmallest) {
            secondSmallest = a;
        }
        if (a > largest) {
            secondLargest = largest
            largest = a
        } else if (a >= secondLargest && a < largest) {
            secondLargest = a
        }
    }

    return {
        "secondSmallest": secondSmallest === Infinity ? null : secondSmallest,
        "secondLargest": secondLargest === -Infinity ? null : secondLargest
    }
}

console.log("Second Smallest:", secondSmallest(arr)); // Output: -1
