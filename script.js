

let currentInput = '';
let operator = '';
let firstOperand = null;

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  firstOperand = null;
  operator = '';
  document.getElementById('display').value = '';
}

function calculate() {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
    currentInput = '';
  } else {
    let secondOperand = parseFloat(currentInput);

    switch (operator) {
      case '+':
        firstOperand += secondOperand;
        break;
      case '-':
        firstOperand -= secondOperand;
        break;
      case '*':
        firstOperand *= secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          alert("Cannot divide by zero");
          clearDisplay();
          return;
        }
        firstOperand /= secondOperand;
        break;
    }

    currentInput = firstOperand.toString();
    document.getElementById('display').value = currentInput;
    firstOperand = null;
    operator = '';
  }
}

function setOperator(op) {
  if (currentInput === '') return;
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  }
  currentInput = '';
  operator = op;
}
