const calculator = {
  firstOperand: null,
  secondOperand: null,
  operator: null,
  operatorClicked: false,
  displayIsResult: false,
  add() { 
    return parseFloat(this.firstOperand) + parseFloat(this.secondOperand) 
  },
  substract() { 
    return parseFloat(this.firstOperand) - parseFloat(this.secondOperand) 
  },
  divide() {
    return parseFloat(this.firstOperand) / parseFloat(this.secondOperand)
  },
  multiply() { 
    return parseFloat(this.firstOperand) * parseFloat(this.secondOperand)
  },
  operate() {
    if (this.operator === '+') return this.add();
    else if (this.operator === '−') return this.substract();
    else if (this.operator === '÷') return this.divide();
    else if (this.operator === '×') return this.multiply();
  }
}

const calculatorUI = document.querySelector('.calculator');
const buttons = calculatorUI.querySelector('.buttons');
buttons.addEventListener('click', handleClick);

function handleClick(e) {
  const display = calculatorUI.querySelector('.display');
  const displayValue = display.innerText;
  const button = e.target;
  const buttonValue = button.innerText;
  
  if (!e.target.closest('button')) return;
  
  if (button.classList.contains('digit')) handleDigits();
  else if (button.classList.contains('operator')) handleOperators();
  else if (button.id === 'decimal-point') handleDecimalPoint();
  else if (button.id === 'delete') handleDelete();
  else if (button.id === 'toggle-negative') handleToggleNegative();
  else if (button.id === 'equals-sign') handleEquals();
  else if (button.id === 'reset') handleReset();

  function handleDigits() {
    if (displayValue.length >= 9) {
      return;
    } else if (displayValue === '0' || calculator.operatorClicked) {
      display.innerText = '' + buttonValue;
    } else if (calculator.displayIsResult && !calculator.operatorClicked) {
      handleReset();
      display.innerText = buttonValue;
    } else {
      display.innerText += buttonValue;
    } 
  
    calculator.operatorClicked = false;
    calculator.displayIsResult = false;
  }

  function handleOperators() {
    if (calculator.operatorClicked) {
      calculator.operator = buttonValue;
      return;
    } else if (!calculator.firstOperand) {
      calculator.firstOperand = displayValue;
      calculator.operator = buttonValue;
    } else {
      calculator.secondOperand = displayValue;
      display.innerText = formatResult(calculator.operate());
      calculator.firstOperand = formatResult(calculator.operate());
      calculator.operator = buttonValue;
      calculator.displayIsResult = true;
    }
    calculator.operatorClicked = true;
  }
  
  function handleDecimalPoint() {
    if (displayValue.length > 7) {
      return;
    } else if (display.innerText.endsWith('.')) {
      display.innerText = displayValue.slice(0, -1);
    } else {
      display.innerText += '.';
    }
  
    calculator.operatorClicked = false;
    calculator.displayIsResult = false;
  }
  
  function handleDelete() {
    if (displayValue.length === 1) {
      display.innerText = '0';
    } else {
      display.innerText = displayValue.slice(0, -1);
    }

    calculator.operatorClicked = false;
    calculator.displayIsResult = false;
  }
  
  function handleToggleNegative() {
    if (displayValue.length >= 9 || displayValue === '0') {
      return;
    } else if (displayValue.startsWith('-')) {
      display.innerText = displayValue.slice(1);
    } else {
      display.innerText = '-' + displayValue;
    }

    calculator.operatorClicked = false;
    calculator.displayIsResult = false;
  }
  
  function handleEquals() {
    if (calculator.firstOperand && calculator.operator) {
      calculator.secondOperand = displayValue;
      display.innerText = formatResult(calculator.operate());
      calculator.displayIsResult = true;
    }
    calculator.operatorClicked = false;
  }
  
  function handleReset() {
    calculator.firstOperand = null;
    calculator.secondOperand = null;
    calculator.operator = null;
    calculator.operatorClicked = false;
    calculator.displayIsResult = false;
    display.innerText = '0';
  }
}

//format the result to have no more than 9 characters, including negative sign and decimal point
function formatResult(result) {
  let resultStr = result.toString();
  
  if (resultStr.length > 9) {
    if (resultStr.includes('-') && result.Str.includes('.')) {
      return result.toPrecision(7).toString();
    } else if (resultStr.includes('-') || resultStr.includes('.')) {
      return result.toPrecision(8).toString();
    } else {
      return result.toPrecision(9).toString();
    }
  } else {
    return resultStr;
  }
}