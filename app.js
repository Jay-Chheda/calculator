// the screen where data is displayed 
const displayScreen = document.querySelector('[data-output]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const dotButton = document.querySelector('[data-dot]');
const clearButton = document.querySelector('[data-clear]');
const allClearButton = document.querySelector('[data-ac]');
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let resetScreen = false;







function evaluate(operator,number1,number2){
    let result;
    switch (operator) {
        case '+':
            result = add(number1,number2);
            break;
        case '-':
            result = subtract(number1,number2);
            break;
        case 'x':
            result = multiply(number1,number2);
            break;
        case '/':
            result = divide(number1,number2);
            break;
        default:
            result = null;
    }
    return result;
    
}







function add(number1,number2){
    return parseFloat(number1)+ parseFloat(number2);
}


function subtract(number1,number2){
    return parseFloat(number1)-parseFloat(number2);
}


function multiply(number1,number2){
    return parseFloat(number1)*parseFloat(number2);
}


function divide(number1,number2){
    return parseFloat(number1)/parseFloat(number2);
}


function resetDisplay(){
    displayScreen.innerText = '';
    resetScreen =false;
}