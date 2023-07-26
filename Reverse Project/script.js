// Main Function: 
function reverseString() {

    // Get the input data
    const inputText = document.getElementById("inputText").value;
    const reversedString = reverse(inputText);
    
    // Display Output
    document.getElementById("outputDiv").innerHTML = `Reversed String: ${reversedString}`;
}

//   Reverse Function
function reverse(inputStr) {
    let reversedStr = "";
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedStr += inputStr.charAt(i);
    }
    return reversedStr;
}