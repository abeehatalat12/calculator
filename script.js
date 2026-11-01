let display = document.getElementById("display");
let firstNumber = null;
let operator = null;
let newNumber = true;

function append(value) {
    if (newNumber) {
        display.value = value === "." ? "0." : value;
        newNumber = false;
    } else {
        if (value === "." && display.value.includes(".")) return;
        display.value =
            display.value === "0" && value !== "."
            ? value
            : display.value + value;
    }
}

function chooseOperator(op) {
    firstNumber = Number(display.value);
    operator = op;
    newNumber = true;
}

function calculate() {
    if (operator === null || firstNumber === null) return;

    let secondNumber = Number(display.value);
    let result;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;break;
        case "/":
            result = secondNumber === 0
                ? "Error"
                : firstNumber / secondNumber;
            break;
    }

    display.value = String(result);
    firstNumber = null;
    operator = null;
    newNumber = true;
}

function clearDisplay() {
    display.value = "0";
    firstNumber = null;
    operator = null;
    newNumber = true;
}

function backspace() {
    if (newNumber) return;

    display.value = display.value.slice(0, -1) || "0";
}

function percentage() {
    display.value = String(Number(display.value) / 100);
    newNumber = true;
}