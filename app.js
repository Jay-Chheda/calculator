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
allClear();


//event listeners start here........

allClearButton.addEventListener('click', allClear);

clearButton.addEventListener('click',clearOne);


//.......event listeners end here 













function allClear(){
    displayScreen.innerText = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null

}

function clearOne(){
    if (displayScreen.innerText == 0) return;
    else {
        displayScreen.innerText = displayScreen.innerText.toString().slice(0,-1);
        if(displayScreen.innerText ==''){
            displayScreen.innerText = '0';
        }
    }
   

}

