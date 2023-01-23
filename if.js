const operator = ( '/' );

const num1 = 1;
const num2 = 2;

let result;

if (operator == '+') {
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else {
    result = num1 / num2;
}

//console.log(`${num1} ${operator} ${num2} = ${result}`);
console.log(`${num1}${operator}${num2}= ${result}`);