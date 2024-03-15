const buttonsDiv = document.querySelector('.buttons');
const displayContent = document.querySelector('.display-content');

let firstOperand;
let secondOperand;
let operator;
let result;

let displayIsToBeCleared = false;
let operatorClicked = false;
let newOperandOnDisplay = false;

buttonsDiv.addEventListener('click', handleClick);
// window.addEventListener('keydown', handleKeydown);

function handleClick(e) {
  let content = displayContent.innerText;

  if (e.target.classList.value.includes('digit')) {
    handleDigits(e);
  } else if (e.target.classList.value.includes('operator')) {
    handleOperators(e);
  } else if (e.target.id === 'delete') {
    displayContent.innerText = content.slice(0, content.length - 1);
  } else if (e.target.id === 'toggle-negative') {
    if (!content.startsWith('-') && content.length < 9) {
      displayContent.innerText = '-' + content;
    } else if (content.startsWith('-')) {
      displayContent.innerText = content.slice(1);
    }
  } else if (e.target.id === 'equals-sign') {

  }
}

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
  //carry out the operation
  switch (operator) {
    case '+':
      result = +operand1 + +operand2;
      break;
    case '-':
      result = +operand1 - +operand2;
      break;
    case 'x':
      result = +operand1 * +operand2;
      break;
    case '/':
      if (+operand2 === 0) {
        result = 'Nice try!';
      }
      result = +operand1 / +operand2;
      break;
  }

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