function findMostFrequentElement(arr) {
    const frequency = {};

    arr.forEach((element) => {
        frequency[element] = (frequency[element] || 0) + 1;
    });


    let mostFrequentElement;
    let maxFrequency = 0;

    for (const key in frequency) {
        if (frequency[key] > maxFrequency) {
            mostFrequentElement = key;
            maxFrequency = frequency[key];
        }
    }

    return mostFrequentElement;
}


const inputArray = [3, 5, 5, 6, 3, 3, 5, 4, 5];
const output = findMostFrequentElement(inputArray);
console.log(output);
