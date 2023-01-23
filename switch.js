let tell = prompt("What would you  like to do (*,/,+,-)");
let dig1 = prompt("Enter first Number");
let dig2 = prompt("Enter second Number")

function calculate(a,b) {
    // check the value of the `tell` is one of these cases and return the result.
    switch (tell) {
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "+":
            return a + b;
        case "-":
            return a - b;
        default:
            return "You didn't a correct opertor"
    }
}

alert(calculate(+dig1, +dig2))