function findSecondSmallest(arr) {
    if (arr.length < 2) {
        throw new Error("Array should contain at least two elements.");
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        throw new Error("No second smallest element found.");
    }

    return secondSmallest;
}

const arr = [7, 15, 5, 9, 2, 8];
const secondSmallest = findSecondSmallest(arr);
console.log(secondSmallest);
