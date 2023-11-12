const calculator = {
    '+': function (a, b) {
        return a + b;
    },
    '-': function (a, b) {
        return a - b;
    },
    '*': function (a, b) {
        return a * b;
    },
    '/': function(a, b) {
        return a / b;
    }
}

let firstNumber = 0,
operator = '+',
secondNumber = 0;

function operate(a, op, b) {
    return calculator[op](a,b);
}

function display(e) {
    const displayFirstValue = document.getElementById('firstValue');
    displayFirstValue.textContent += this.textContent;
    firstNumber = displayFirstValue.textContent;
    console.log(firstNumber);
}

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', display));

console.log(operate(firstNumber, operator, secondNumber));