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
let operation = [add, subtract, multiply, divide]; //store all operation in one variable

//operate function
function operate(operator, a, b) {
    if (operator == '+') {return add(a, b)}
    if (operator == '-') {return subtract(a, b)}
    if (operator == '*') {return multiply(a, b)}
    if (operator == '/') {return divide(a, b)}
}

/* 5. Создать функцию которая будет заполнять экран калькулятора при нажатии кнопок цифр. 
Нужно хранить величину отображения в переменной для следующего этапа.  */

let displayValue = 0;
let getDisplay = document.getElementById('display');
let numButtons = document.querySelectorAll('.num');

function fillDisplay () {
    Array.from(numButtons).forEach((num) => { //convert numButtons DOMnodes to an array with Array.from()
        num.addEventListener('click', () => {
            getDisplay.innerHTML = num.value;
            displayValue = num.value;
        })
    })
}
fillDisplay();


/* const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const dot = document.getElementById('.');

function fillDisplay () {
    one.addEventListener('click', () => {
        getDisplay.innerHTML = one.value;
        displayValue = 1;
    });
    two.addEventListener('click', () => {
        getDisplay.innerHTML = two.value;
        displayValue = 2;
    });
    three.addEventListener('click', () => {
        getDisplay.innerHTML = three.value;
        displayValue = 3;
    });
    four.addEventListener('click', () => {
        getDisplay.innerHTML = four.value;
        displayValue = 4;
    });
    five.addEventListener('click', () => {
        getDisplay.innerHTML = five.value;
        displayValue = 5;
    });
    six.addEventListener('click', () => {
        getDisplay.innerHTML = six.value;
        displayValue = 6;
    });
    seven.addEventListener('click', () => {
        getDisplay.innerHTML = seven.value;
        displayValue = 7;
    });
    eight.addEventListener('click', () => {
        getDisplay.innerHTML = eight.value;
        displayValue = 8;
    });
    nine.addEventListener('click', () => {
        getDisplay.innerHTML = nine.value;
        displayValue = 9;
    });
    zero.addEventListener('click', () => {
        getDisplay.innerHTML = zero.value;
        displayValue = 0;
    });
    dot.addEventListener('click', () => {
        getDisplay.innerHTML = dot.value;
    });
}

fillDisplay(); */



