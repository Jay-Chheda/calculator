// the screen where data is displayed 
const displayScreen = document.querySelector('[data-output]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const dotButton = document.querySelector('[data-dot]');
const clearButton = document.querySelector('[data-clear]');
const allClearButton = document.querySelector('[data-ac]');
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

equalButton.addEventListener('click', operate);

allClearButton.addEventListener('click',allClear);
clearButton.addEventListener('click', deleteOne);

dotButton.addEventListener('click',appendDot);

numberButtons.forEach(button => {
          button.addEventListener('click',()=>{
  appendNumber(button.textContent);
    });
    
});

operatorButtons.forEach(button=>button.addEventListener('click',(ev)=>{
    setOperation(button.textContent);
}));


function setOperation(operator){
    if(currentOperation!==null) operate();
    currentOperation = operator;
    firstOperand = displayScreen.textContent;
    shouldResetScreen = true;

    
}

function operate(){
    if(currentOperation ==null || shouldResetScreen) return;
    if(displayScreen.textContent ==='0' && currentOperation =='/'){
        alert('cannot divide by 0');
        allClear();
        return;
    }
    secondOperand = displayScreen.textContent;
    displayScreen.textContent = (Math.round(evaluate(currentOperation,firstOperand,secondOperand)*1000)/1000);
    currentOperation = null;



}



function appendNumber(number){
    if(shouldResetScreen || displayScreen.textContent ==='0') resetDisplay();
    displayScreen.textContent += number;

}

function appendDot(){
    if(shouldResetScreen) resetDisplay();
    if(displayScreen.textContent =='') displayScreen.textContent ='0';
    if(displayScreen.textContent.includes('.')) return;
    displayScreen.textContent+= '.';

}














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
    shouldResetScreen =false;
}

function allClear(){
    displayScreen.innerText = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}
allClear();

function deleteOne(){
    displayScreen.textContent = displayScreen.textContent.toString().slice(0,-1);
    if(displayScreen.textContent ===''){
        displayScreen.textContent = '0';
    }
}