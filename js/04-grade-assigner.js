var number = parseInt(window.prompt("Enter enter a number between 1 to 100"), 10);

if  (number >= 1 && number <= 100) {
    if (number >= 90 && number <= 100) {
        window.console.log("You received a A");
    } else if (number >= 80 && number <= 89) {
        window.console.log("You received a B");
    } else if (number >= 70 && number <= 79 ) {
        window.console.log("You received a C");
    } else if (number >= 60 && number <= 69 ) {
        window.console.log("You received a D");
    } else {
        window.console.log("You received a F");
} 
}  else {        
        window.console.log("Please enter a number between 1 to 100");
}