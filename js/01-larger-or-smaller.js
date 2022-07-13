var number1 = parseInt(window.prompt("Enter the first number"), 10);
var number2 = parseInt(window.prompt("Enter the second number"), 10);
if (number1 > number2) {
    window.document.write("The larger number is " + number1);
} else if (number2 > number1) {
    window.document.write("The larger number is " + number2);
} else {
    window.document.write("Both numbers are equal.");
}

