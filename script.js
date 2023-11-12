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

let firstNumber = null,
operator = '',
secondNumber = null;

const displayFirstValue = document.getElementById('firstValue');
const displaySecondValue = document.getElementById('secondValue');
const operatorDisplay = document.getElementById('operator');

function operate(a, op, b) {
    return calculator[op](a,b);
}

function displayNumber() {
    if (operator !== '') {
        displaySecondValue.textContent += this.textContent;
        secondNumber = +(displaySecondValue.textContent);
        
    } else {    
        displayFirstValue.textContent += this.textContent;
        firstNumber = +(displayFirstValue.textContent);
    }
}

function displayOperator() {
    if(firstNumber !== null && operator !=='' && secondNumber !== null) {
        firstNumber = operate(firstNumber, operator, secondNumber);
        displayFirstValue.textContent = firstNumber;
        secondNumber = null;
        displaySecondValue.textContent = '';
    }
    if(this.textContent !== '=') {
        operatorDisplay.textContent = this.textContent;
        
    } else {
        operatorDisplay.textContent = '';
    }
    operator = this.id;
}

function clear() {
    firstNumber = null;
    operator = '';
    secondNumber = null;
    displayFirstValue.textContent = '';
    operatorDisplay.textContent = '';
    displaySecondValue.textContent = '';
}

document.getElementById('clear').addEventListener('click', clear);

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const operators = document.querySelectorAll('.operator');
operators.forEach(op => op.addEventListener('click', displayOperator));

// console.log(operate(firstNumber, operator, secondNumber));