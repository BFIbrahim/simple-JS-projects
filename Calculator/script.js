const calculator = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    },
};

function calculate(num1, operator, num2) {
    if (operator in calculator) {
        return calculator[operator](num1, num2);
    } else {
        throw new Error("Invalid operator. Supported operators are '+', '-', '*', and '/'.");
    }
}

try {
    const resultAdd = calculate(5, '+', 3);
    console.log(resultAdd);

    const resultSubtract = calculate(10, '-', 5);
    console.log(resultSubtract);

    const resultMultiply = calculate(4, '*', 6);
    console.log(resultMultiply);

    const resultDivide = calculate(15, '/', 3);
    console.log(resultDivide);

    const resultInvalid = calculate(2, '%', 2);
} catch (error) {
    console.error(error.message);
}
