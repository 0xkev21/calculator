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
        if(b === 0) {
            alert("Don't divide with zero");
            return null;
        }
        else {
            return a / b;
        }
    }
}

let firstNumber = null,
operator = '',
secondNumber = null;

const displayFirstValue = document.getElementById('firstValue');
const displaySecondValue = document.getElementById('secondValue');
const operatorDisplay = document.getElementById('operator');

function getPrecision(number) {
    const decimalPart = (number.toString().split('.')[1] || '').length;
    return decimalPart;
}

function roundToPrecision(number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

function operate(a, op, b) {
    const precision = Math.max(getPrecision(a), getPrecision(b));
    if (op !== '/') {
        return roundToPrecision(calculator[op](a,b), precision);
    }
    return calculator[op](a,b);
}

function displayNumber() {
    if (operator !== '') {
        if(this.textContent === '.') {
            if(displaySecondValue.textContent.includes('.')) {
                return;
            }
        }
        displaySecondValue.textContent += this.textContent;
        secondNumber = +(displaySecondValue.textContent);
        
    } else {
        if(this.textContent === '.') {
            if(displayFirstValue.textContent.includes('.')) {
                return;
            }
        }
        displayFirstValue.textContent += this.textContent;
        firstNumber = +(displayFirstValue.textContent);
    }
}

function displayOperator() {
    if(firstNumber !== null && operator !=='' && secondNumber !== null) {
        firstNumber = operate(firstNumber, operator, secondNumber);
        if(firstNumber === null) { clear(); return; };
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

function deleteFunc() {
    if(displaySecondValue.textContent.length > 0) {
        displaySecondValue.textContent = displaySecondValue.textContent.slice(0, -1);
        secondNumber = +(displaySecondValue.textContent);
    } else if(operatorDisplay.textContent !== '') {
        operatorDisplay.textContent = '';
        operator = '';
    } else if(displayFirstValue.textContent.length > 0) {
        displayFirstValue.textContent = displayFirstValue.textContent.slice(0, -1);
        firstNumber = +(displayFirstValue.textContent);
    }
}
document.getElementById('delete').addEventListener('click', deleteFunc);

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const operators = document.querySelectorAll('.operator');
operators.forEach(op => op.addEventListener('click', displayOperator));
