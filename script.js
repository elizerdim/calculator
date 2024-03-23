const calculator = {
  firstOperand: null,
  secondOperand: null,
  operator: null,
  currentDisplay: '0',
  operatorClicked: false,
  displayIsResult: false,
  add() { 
    return this.firstOperand + this.secondOperand 
  },
  substract() { 
    return this.firstOperand - this.secondOperand 
  },
  divide() {
    return this.firstOperand / this.secondOperand
  },
  multiply() { 
    return this.firstOperand * this.secondOperand
  },
  operate() {
    if (this.operator === '+') return this.add();
    else if (this.operator === '−') return this.substract();
    else if (this.operator === '÷') return this.divide();
    else return this.multiply();
  }
}

const calculatorUI = document.querySelector('.calculator');
const display = calculatorUI.querySelector('.display');
const buttons = calculatorUI.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
  if (!e.target.closest('button')) return;
  
  const button = e.target;
  const buttonValue = button.innerText;
  const displayValue = display.innerText;

  console.log(button.classList.contains('digit'));

  if (button.classList.contains('digit')) handleDigits(e);
  else if (button.classList.contains('operator')) handleOperators(e);
  else if (button.id === 'decimal-point') handleDecimalPoint(e);
  else if (button.id === 'delete') handleDelete(e);
  else if (button.id === 'toggle-negative') handleToggleNegative(e);
  else if (button.id === 'equals-sign') handleEquals(e);
  else handleReset(e);
});

// window.addEventListener('keydown', handleKeydown);

function handleDigits(e) {
  if (displayIsToBeCleared && operatorClicked) {
    displayContent.innerText = '';
  }

  if (displayContent.innerText.length < 9) {
    displayContent.innerText += e.target.innerText;
    displayIsToBeCleared = false;
    operatorClicked = false;
    newOperandOnDisplay = true;
  }
}

function handleOperators(e) {
  if (operatorClicked) {
    operator = e.target.innerText;
    return;
  }

  if (!!firstOperand && !!operator) {
    secondOperand = displayContent.innerText;
    operate(firstOperand, secondOperand, operator);
    displayContent.innerText = result;
  } 

  firstOperand = displayContent.innerText;
  operator = e.target.innerText;

  displayIsToBeCleared = true;
  operatorClicked = true;
  newOperandOnDisplay = false;
}

function operate(operand1, operand2, operator) {

  //format the result to have no more than 9 characters, including negative sign and decimal point
  let resultStr = result.toString();
  
  if (resultStr.length > 9) {
    if (resultStr.includes('-') && result.Str.includes('.')) {
      result = result.toPrecision(7).toString();
    } else if (resultStr.includes('-') || resultStr.includes('.')) {
      result = result.toPrecision(8).toString();
    } else {
      result = result.toPrecision(9).toString();
    }
  }
}