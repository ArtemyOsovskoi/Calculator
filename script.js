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

//variables
let a = 0; //first entered number
let b = 0; //second entered number
let mathOperations = [add, subtract, multiply, divide]; //store all operation in one variable

//operate function
function operate(operator, a, b) {
    if (operator == '+') {return add(a, b)}
    if (operator == '-') {return subtract(a, b)}
    if (operator == '*') {return multiply(a, b)}
    if (operator == '/') {return divide(a, b)}
}


//fill display with entered numbers function, store entered value in variable
let displayValue = 0;
let getDisplay = document.getElementById('inputDisplay');
let numButtons = document.querySelectorAll('.num');
let mathOpButtons = document.querySelectorAll('.math');

function fillDisplay () {
    Array.from(numButtons).forEach((num) => { //convert numButtons DOMnodes to an array with Array.from()
        num.addEventListener('click', () => {
            let displayLength = getDisplay.innerText;
            if (displayLength.length < 55) { //set limit on a numbers entered
                getDisplay.innerText += num.value;
                displayValue = num.value; //store entered value in variable
            }
        })
    })
    Array.from(mathOpButtons).forEach((math) => { 
        math.addEventListener('click', () => {
            getDisplay.innerText += math.value;    
        })
    })
}
fillDisplay();

/* 6. Делаем калькулятор. Нужно сохранить первое число которое нажато когда пользователь жмет кнопку МО и 
саму МО, а затем запускать `operate()` на них когда жмет = кнопку.
-   Уже должен быть код который заполняет экран, так что как только `operate()` была вызвана, 
нужно отобразить экран с результатом вычисления. */

//calculator function


function calculator () {
    let a = displayValue;

}

/* Проблема: нужно написать функцию калькулятор, которая 
- сохраняет первое введенное число в переменной,когда пользователь нажимает на кнопку математической операции, 
- сохранить второе число и эту выбранную операцию
- наконец вызвать operate() на этих числах и операции, произведя подсчет 

Ввод: число, математическая операция, равенство
Вывод: результат подсчета

Алгоритм:
    1. Сохранить первое введенное число в переменной
    2. Сохранить второе число и операцию
    3. Вызвать operate() и вернуть результат подсчета на экран
*/