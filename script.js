const displayArea = document.getElementById('display-area');
const numberBtn = document.querySelectorAll('.numbers');
const equalBtn = document.getElementById('equal');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('clear');
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;
let result = null;
let toBeCleaned = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch(operator) {
    case "add":
      return add(a, b);
      break;
    case "subtract":
      return subtract(a, b);
      break;
    case "multiply":
      return multiply(a, b);
      break;
    case "divide":
      return divide(a, b);
      break;
  }
}

function displayValue(value) {
  displayArea.textContent = displayArea.textContent + value;
}

function getDisplayValue() {
  return displayArea.textContent;
}

function setOperator(operator) {
  if (currentOperator == null) {
    currentOperator = operator;
  } else if (firstNumber && secondNumber) {
    result = operate(Number(firstNumber), Number(secondNumber), currentOperator);
    clearDisplay();
    displayValue(result);
    firstNumber = result;
    secondNumber = null;
    currentOperator = operator
    }
  }

  function setOperand(value) {
    if (firstNumber == null) {
      firstNumber = value;
    } else {
      secondNumber = value;
    }
  }

  function clearDisplay() {
    displayArea.textContent = "";
  }

function generateResult() {
  if (firstNumber && currentOperator && !toBeCleaned && !secondNumber) {
    setOperand(getDisplayValue());
    return operate(Number(firstNumber), Number(secondNumber), currentOperator);
  } else {
    return false;
  }
}

operatorBtn.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    setOperand(getDisplayValue());
    setOperator(e.target.id);
    toBeCleaned = true;
});
});


numberBtn.forEach((numberButton) => {
  numberButton.addEventListener("click", e => {
    if (toBeCleaned) {
      clearDisplay();
    }
    displayValue(e.target.textContent);
    toBeCleaned = false;
});
});



clearBtn.addEventListener('click', () => {
  firstNumber = null;
  secondNumber = null;
  currentOperator = null;
  clearDisplay();
});


equalBtn.addEventListener('click', () => {
  result = generateResult();
  clearDisplay();
  if (result) {
    displayValue(result);
  }
});

