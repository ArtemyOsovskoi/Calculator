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
            let displayLength = getDisplay.innerText;
            console.log(displayLength.length);
            if (displayLength.length < 20) {
                getDisplay.innerText += num.value;
                displayValue = num.value;
            }
        })
    })
}
fillDisplay();



//на 21.06: понять как поставить лимит на вводимые числа, перейти к следующей задаче 

