const displayArea = document.getElementById('display-container');
const numberBtn = document.querySelectorAll('.numbers');
const equalBtn = document.getElementById('equal');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('clear');
let displayValue = 0;
let firstNumber = "";
let secondNumber = "";
let operator = "";

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


numberBtn.forEach(number => {
  number.addEventListener("click", e => {
      if (operator === "") { // Read first number if no operator set yet
          firstNumber += e.target.innerText;
          console.log(firstNumber)
      } else { // Read second number
          secondNumber += e.target.innerText;
          console.log(secondNumber)
      }
  });
});

operatorBtn.forEach(op => {
  op.addEventListener("click", e => {
    if (e.target.innerText !== "=") { // If the operator is not equals
      operator = e.target.innerText;

      console.log(firstNumber); // Print the first number
      console.log(operator); // Print the operator

  } else { // If equals button clicked
      console.log(secondNum); // Print 2nd number

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
  });
});





clearBtn.addEventListener('click', () => {
  
});























// function operate(a, b, operator) {
  // switch(operator) {
  //   case "add":
  //     return add(a, b);
  //     break;
  //   case "subtract":
  //     return subtract(a, b);
  //     break;
  //   case "multiply":
  //     return multiply(a, b);
  //     break;
  //   case "divide":
  //     return divide(a, b);
  //     break;
  // }
// }


// numberBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     if (condition) {
      
//     }
//      let firstNumber = button.value;
//      displayArea.innerText = firstNumber;
//   });
// });

