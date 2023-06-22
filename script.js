//add function
function add (a, b) {
    return a + b
}
//subtract function
function subtract (a, b) {
    return a - b
}
//function multiply
function multiply (a, b) {
    return a * b 
}
//function divide
function divide (a, b) {
    return a / b
}

//operate function
function operate(operator, a, b) {
    if (operator == '+') {return add(a, b)}
    if (operator == '-') {return subtract(a, b)}
    if (operator == '*') {return multiply(a, b)}
    if (operator == '/') {return divide(a, b)}
}

//variables
/* let displayValue = 0; */
let getInputDisplay = document.getElementById('inputDisplay');
let getResultDisplay = document.getElementById('resultDisplay');
let numButtons = document.querySelectorAll('.num');
let mathOpButtons = document.querySelectorAll('.math');
let equalsButton = document.getElementById('equals');

let a = 0; //first entered number
let b = 0; //second entered number
let mathOperations = [add, subtract, multiply, divide]; //store all operation in one variable
let operator = '';

//fill display with entered numbers function, store entered value in variable
function fillDisplay () {
    Array.from(numButtons).forEach((num) => { //convert numButtons DOMnodes to an array with Array.from()
        num.addEventListener('click', (event) => {
            let displayLength = getInputDisplay.innerText;
            if (displayLength.length < 55 && operator === '') { //set limit on a numbers entered
                getInputDisplay.innerText += num.value; 
                a += event.target.value; 
                console.log(a);
                /* displayValue = num.value; //store entered value in variable */
            } else {
                getInputDisplay.innerText += num.value; 
                b += event.target.value; 
                console.log(b);
            }
        })
    })
    Array.from(mathOpButtons).forEach((math) => { 
        math.addEventListener('click', (event) => {
            getInputDisplay.innerText += math.value;
            operator = event.target.innerText;
            console.log(operator)
        })
    })
    equalsButton.addEventListener('click', () => {
        getResultDisplay.innerText = calculator(a, operator, b); //get and display calculator return value
    })

}
fillDisplay();

/* 6. Делаем калькулятор. Нужно сохранить первое число которое нажато когда пользователь жмет кнопку МО и 
саму МО, а затем запускать `operate()` на них когда жмет = кнопку.
-   Уже должен быть код который заполняет экран, так что как только `operate()` была вызвана, 
нужно отобразить экран с результатом вычисления. */

//calculator function


function calculator (firstNum, operator, secondNum) {
    firstNum = Number(a);
    secondNum = Number(b);
    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        return operate(operator, firstNum, secondNum)
    }
}