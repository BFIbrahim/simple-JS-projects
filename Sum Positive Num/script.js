function sumPositiveNumbers(array) {

    let positiveSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveSum += array[i];
        }
    }

    return positiveSum;
}


const inputArray = [3, -5, 50, -3, 7];
const result = sumPositiveNumbers(inputArray);
console.log(result);
