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
                //console.log(a);
            } else if (operator === '+' || operator === '-'|| operator === '*' || operator === '/') {
                getInputDisplay.innerText += num.value; 
                b += event.target.value;
                getResultDisplay.innerText = calculator(a, operator, b);
                if (getInputDisplay.innerHTML.match(/[/]/g) && b === '0') {
                    b = ''
                    //getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1); 
                    getResultDisplay.innerText = 'Can\'t divide by 0';
                }
                //console.log(getInputDisplay.innerHTML.match(/[/]/g) > 1);
                //console.log(b);
            }  
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
        })
    })
    equalsButton.addEventListener('click', () => {
        getResultDisplay.innerText = calculator(a, operator, b);
        getInputDisplay.innerHTML = ''
        a = ''
        b = ''
        operator = ''
    })

}
fillDisplay();

//calculator function
function calculator (a, operator, b) {
    return operate(operator, Number(a), Number(b)).toFixed(2)
}

//clear function
let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=> {
    a = ''
    b = ''
    getInputDisplay.innerHTML = ''
    getResultDisplay.innerHTML = ''
    operator = ''
})

//delete function
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', ()=> {
    let displayToArray = getInputDisplay.innerText.split('');
    let lastChar = displayToArray[displayToArray.length - 1];

    if (lastChar == '+' || lastChar == '-' ||lastChar == '*' || lastChar == '/') {
        operator = ''
        getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        getResultDisplay.innerText = calculator(a, operator, b);
    }
    if (lastChar.match(/^\d+$/)){
        b = b.slice(0, -1);
        getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        getResultDisplay.innerText = calculator(a, operator, b);
    }
     /* if (последний символ это математич операция) {operator=''} 
    if (последний символ это число b) {b=''} */
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