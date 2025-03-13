// Find the majority element in an array
// Example Usage:
// 1️⃣ Using the Boyer-Moore Voting Algorithm (Optimal)
// Time Complexity: 𝑂(𝑛)
// Space Complexity: 𝑂(1)

const arr = [3, 4, 3, 4, 4, 3, 4];
 // Output: 2

function majorityElement(nums) {
    let element = null;
    let count = 0;

    // Step 1: Find a element
    for (let num of nums) {
        if (count === 0) {
            element = num;
        }
        count += (num === element) ? 1 : -1;
    }
    // Step 2: Verify if the element is actually the majority element
    count = 0;
    for (let num of nums) {
        if (num === element) count++;
    }

    return count > Math.floor(nums.length / 2) ? element : -1;
}
