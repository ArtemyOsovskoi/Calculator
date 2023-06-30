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
                //prevent '.' double clicking
                let displayToArray = getInputDisplay.innerText.split('');
                let lastChar = displayToArray[displayToArray.length - 1];
                if (lastChar === '.') {
                    document.getElementById('.').disabled = true;
                }
                console.log(a);
            } else if (operator === '+' || operator === '-'|| operator === '*' || operator === '/') {
                getInputDisplay.innerText += num.value;
                //if (b == '') {b = event.target.value;}
                b += event.target.value;
                //getResultDisplay.innerText = calculator(a, operator, b);
                //prevent '.' double clicking
                let displayToArray = getInputDisplay.innerText.split('');
                let lastChar = displayToArray[displayToArray.length - 1];
                if (lastChar === '.') {
                    document.getElementById('.').disable = true;
                }
                //prevent from dividing by 0
                if (getInputDisplay.innerHTML.match(/[/]/g) && b === '0') {
                    b = ''
                    getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1); 
                    alert('Can\'t divide by 0');
                }
                //console.log(getInputDisplay.innerHTML.match(/[/]/g) > 1);
                console.log(b);
            }  
        })
    })
    Array.from(mathOpButtons).forEach((math) => { 
        math.addEventListener('click', (event) => {
            getInputDisplay.innerText += math.value;
            if (getInputDisplay.innerHTML.match(/[\/\+\-\*]/g).length > 1) { 
                //a = getResultDisplay.innerText;
                a = calculator(a, operator, b);
                operator = event.target.innerText;
                getInputDisplay.innerText = a + operator;
            } 
            operator = event.target.innerText;
            b = ''
            //check if display has more than 1 math operator

            //b = ''
        console.log(operator);
        })
    })
    equalsButton.addEventListener('click', () => {
        getResultDisplay.innerText = calculator(a, operator, b).toFixed(2);
        getInputDisplay.innerHTML = ''
        a = ''
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
})

//delete function
let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', ()=> {
    let displayToArray = getInputDisplay.innerText.split('');
    let lastChar = displayToArray[displayToArray.length - 1];
    //1.когда 250+50 - lastChar = number, operator !='', b != ''
    if (lastChar.match(/^(\d)*(\.)?([0-9]{1})?$/gm) && operator != '' && b.length >= 1) {
        //когда 250+50+5 
        if (b.length == 1 && getInputDisplay.innerHTML.match(/[\/\+\-\*]/g).length > 1) {
            b = b.slice(0, -1);
            getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
            getResultDisplay.innerText = Number(a);
        }
        //когда 250+50 
        if (b.length > 1) {
            b = b.slice(0, -1);
            getResultDisplay.innerText = calculator (a, operator, b);
            getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        }  
    }

   /*  //2.когда 250+5 - lastChar=number, operator != '', b = ''
    if (lastChar.match(/^(\d)*(\.)?([0-9]{1})?$/gm) && operator !='' && b == '') {
        //b = b.slice(0, -1);
        getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        getResultDisplay.innerText = getResultDisplay.innerText.slice(0, -1);
    } */

    //3. когда 250+ - lastChar = operator, operator = '', b = ''\b != '' (250+25-2)
    if (lastChar.match(/[\/\+\-\*]/g) && b == '' ) {
        getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        //getResultDisplay.innerText = getResultDisplay.innerText.slice(0, -1);
        //a = a.slice(0, -1);
        operator = ''
        
        //когда 250+50-
        if (b != '' ) {
            getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
            //getResultDisplay.innerText = getResultDisplay.innerText.slice(0, -1);
            operator = '';
        }
    }
    
    //4. когда 250 - lastChar = number, operator = '', b = ''
    if (lastChar.match(/^(\d)*(\.)?([0-9]{1})?$/gm) && operator == '' && b == '') {
        getInputDisplay.innerText = getInputDisplay.innerText.slice(0, -1);
        getResultDisplay.innerText = getResultDisplay.innerText.slice(0, -1);
        a = a.slice(0, -1);
    }
})

/* 29.06 - снова запутался, переписав функцию, проблема в ситуации 250+50+5 когда 5 = b удаляем
и непонятно как "сделать" 50 в b тк иначе при 250+50 b == 0 или (если не удалять) или b == 5 что в обоих
случаях неверно */