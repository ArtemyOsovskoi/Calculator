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
            if (operator === '') { 
                getInputDisplay.innerText += num.value; 
                a += event.target.value;
                //prevent '.' double clicking
                if (getInputDisplay.textContent.includes('.')) {
                   document.getElementById('.').disabled = true;
                }
                console.log(a);
            } else if (operator === '+' || operator === '-'|| operator === '*' || operator === '/') {
                getInputDisplay.innerText += num.value;
                b += event.target.value;
                let displayToArray = getInputDisplay.innerText.split('');
                let lastChar = displayToArray[displayToArray.length - 1];
                if (getInputDisplay.textContent.includes('.') && lastChar == '.') {
                   document.getElementById('.').disabled = true;
                }
                //prevent from dividing by 0
                if (getInputDisplay.innerHTML.match(/[/]/g) && b === '0') {
                    b = ''
                    getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1); 
                    alert('Can\'t divide by 0');
                }
                console.log(b);
            }  
        })
    })
    Array.from(mathOpButtons).forEach((math) => { 
        math.addEventListener('click', (event) => {
            getInputDisplay.innerText += math.value;
            if (getInputDisplay.innerHTML.match(/[\/\+\-\*]/g).length > 1) {  
                a = calculator(a, operator, b);
                operator = event.target.innerText;
                getInputDisplay.innerText = a + operator;
            } 
            operator = event.target.innerText;
            b = ''
            document.getElementById('.').disabled = false;
            console.log(operator);
        })
    })
    equalsButton.addEventListener('click', () => {
        a = calculator(a, operator, b).toFixed(2);
        getResultDisplay.innerText = a;
        getInputDisplay.innerHTML = a;
        b = ''
        operator = ''
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
    operator = ''
    document.getElementById('.').disabled = false;
})

//delete function
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', ()=> {
    let displayToArray = getInputDisplay.innerText.split('');
    let lastChar = displayToArray[displayToArray.length - 1];
    if (getInputDisplay.innerHTML != '') {
        //before math operator, only first num (a) eg 25, 68231 etc - delete from a
        if (lastChar.match(/^(\d)*(\.)?([0-9]{1})?$/gm) && b == '') {
            a = a.toString().slice(0, -1);
            getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        }
        //first num (a) + math operator eg 25+, 231- etc - delete from math op
        if (lastChar.match(/[\/\+\-\*]/g) && b == '') {
            operator = ''
            getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        }
        //fist num (a) + math op + next number (b) eg 25+2, 320/10 etc - delete from b
        if (lastChar.match(/^(\d)*(\.)?([0-9]{1})?$/gm) && b != '') {
            b = b.toString().slice(0, -1);
            getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        }
    }
})

//разобраться с кнопкой точки (нужно вводить только 1 раз и отключать ее, 
//а потом снова включать для нового числа)