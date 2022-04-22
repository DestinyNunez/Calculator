//js code here bro//

// Step 1: Program will take in 2 numbers that the user will input into a textfield.

// Step 2: Once we receive those 2 numbers the user will choose an arithmetic operator to apply to the inputs.

// Step 3: Once they select their operator and input the numbers they will press the submit btn. This btn will then disply the results.

//SUBMIT BUTTON
document.getElementById('submitBtn').onclick = submit;

//ADD BUTTON
document.getElementById('add').onclick = add;

//SUBTRACT BUTTON
document.getElementById('subtract').onclick = subtract;

//MULTIPLY button
document.getElementById('multiply').onclick = multiply;

//DIVIDE BUTTON
document.getElementById('divide').onclick = divide;

//CLEAR ALL BUTTON
document.getElementById('clearBtn').onclick = clear;

//Create variables that can take in the user's input



//Submit function
function submit() {
  document.querySelector('.results').innerText = total;
}

//Clear all function
function clear() {
  document.querySelector('.results').innerText = "";
}


//Asign value to total variable with arithmetic operators.
function add() {
  const  num1 = parseInt(document.querySelector('.input1').value);
  const  num2 = parseInt(document.querySelector('.input2').value);
  total = num1 + num2
}

function subtract() {
  const  num1 = parseInt(document.querySelector('.input1').value);
  const  num2 = parseInt(document.querySelector('.input2').value);
  total = num1 - num2
}

function multiply() {
  const  num1 = parseInt(document.querySelector('.input1').value);
  const  num2 = parseInt(document.querySelector('.input2').value);
  total = num1 * num2
}

function divide() {
  const  num1 = parseInt(document.querySelector('.input1').value);
  const  num2 = parseInt(document.querySelector('.input2').value);
  total = num1 / num2
}
