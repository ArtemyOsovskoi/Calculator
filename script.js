/* 1. Your calculator is going to contain functions for all of the basic math operators you typically find 
on simple calculators, so start by creating functions for the following items and 
testing them in your browser’s console:
add
subtract
multiply
divide */

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

/* 3. Создай функцию `operate` которая берет оператор и 2 числа и 
вызывает одну из функций созданных ранее в пункте 1 (сложение, умножение и тд)
на этих числах */

//operate function
function operate(operator, a, b) {
    if (operator == '+') {return add(a, b)}
    if (operator == '-') {return subtract(a, b)}
    if (operator == '*') {return multiply(a, b)}
    if (operator == '/') {return divide(a, b)}
}