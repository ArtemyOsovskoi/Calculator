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
let getInputDisplay = document.getElementById('inputDisplay');
let getResultDisplay = document.getElementById('resultDisplay');
let numButtons = document.querySelectorAll('.num');
let mathOpButtons = document.querySelectorAll('.math');
let equalsButton = document.getElementById('equals');

let a = 0; //store first entered number
let b = 0; //store second entered number
let operator = ''; //store entered operator

//fill display with entered numbers function, store entered value in variable
function fillDisplay () {
    Array.from(numButtons).forEach((num) => { //convert numButtons DOMnodes to an array with Array.from()
        num.addEventListener('click', (event) => {
            let displayLength = getInputDisplay.innerText;
            if (displayLength.length < 55 && operator === '') { //set limit on a numbers entered
                getInputDisplay.innerText += num.value; 
                a += event.target.value;
                console.log(a);
            } else if (operator === '+' || operator === '-'|| operator === '*' || operator === '/') {
                getInputDisplay.innerText += num.value; 
                b += event.target.value; 
                getResultDisplay.innerText = calculator(a, operator, b);
                console.log(getInputDisplay.innerHTML.match(/[\/\+\-\*]/g).length > 1);
                console.log(b);
            }  
            //25.06.23 - нужно проверить строку getInputDisplay на наличии 2х и более введенных символов
            //математических операций, и если это true - задать переменной a return value
            //26.06 - пока проблема в том, что при первой матем. операции переменная a принимает
            //величину результата и сохраняет ее, т.е. когда к b добавляем еще числа выходит неверно
            //нужно как то оставлять a при введении новых чисел b и не менять ее динамически
            //а потом это уже нужно всегда

            /* нужно что бы до ввода следующей математической операции переменная a оставалась
            как первое введенное число, а уже затем всегда являлась результатом предыдущего вычисления */
        })
    })
    Array.from(mathOpButtons).forEach((math) => { 
        math.addEventListener('click', (event) => {
            getInputDisplay.innerText += math.value;
            operator = event.target.innerText;
            if (getInputDisplay.innerHTML.match(/[\/\+\-\*]/g).length > 1) { //check if display has more than 1 math operator
                a = getResultDisplay.innerText;
            } 
            b = ''
            console.log(operator);
        })
    })
    equalsButton.addEventListener('click', () => {
        getResultDisplay.innerText = calculator(a, operator, b); 
    })

}
fillDisplay();

//calculator function

function calculator (a, operator, b) {
    return operate(operator, Number(a), Number(b))
}

//clear function
let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=> {
    a = ''
    b = ''
    getInputDisplay.innerHTML = ''
    getResultDisplay.innerHTML = ''
})

/* 
23.06 что поменять:
- нужно считать результат каждых ДВУХ цифр, т.е. когда вводим 1+ 2+ 3, 1+2 считаются в момент ввода 2 и 
после при вводе 3 складывается получая 6;


 */
/* Users should be able to string together several operations and get the right answer, 
with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. 

Your calculator SHOULD NOT EVALUATE MORE THAN A SINGLE PAIR of numbers AT A TIME. 
Example: you press a number button (12), followed by an operator button (+), a second number button (7), 
and finally a second operator button (-). Your calculator should then do the following: 
- first, evaluate the first pair of numbers (12 + 7), 
- second, display the result of that calculation (19), 
- and finally, use that result (19) as the first number in your new calculation,along with the next operator (-). */