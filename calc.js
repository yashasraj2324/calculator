let currentDisplay = ""; // Corrected the variable name to 'currentDisplay'

function appendNumber(number) {
  currentDisplay += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentDisplay !== '' && !isNaN(currentDisplay[currentDisplay.length - 1])) {
    currentDisplay += operator;
    updateDisplay();
  }
}

function appendDecimal() {
  if (!currentDisplay.includes('.')) {
    currentDisplay += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentDisplay = ''; // Corrected the variable name to 'currentDisplay'
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentDisplay);
    currentDisplay = result.toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = 'Error';
    updateDisplay();
  }
}

function toggleSign() {
  if (currentDisplay !== '' && currentDisplay !== '0') {
    if (currentDisplay[0] === '-') {
      currentDisplay = currentDisplay.slice(1);
    } else {
      currentDisplay = '-' + currentDisplay;
    }
    updateDisplay();
  }
}

function backspace() {
  currentDisplay = currentDisplay.slice(0, -1);
  updateDisplay();
}

function appendPercentage() {
  if (currentDisplay !== '') {
    const value = parseFloat(currentDisplay) / 100;
    currentDisplay = value.toString();
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentDisplay;
}
