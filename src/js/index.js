console.log('It works!');


const add = document.querySelector('#btn-add');
const result = document.querySelector('.calc__result');
const input = document.querySelector('.calc__input');
const clear = document.querySelector('#btn-clear');
const equals = document.querySelector('#btn-equals');
const minus = document.querySelector('#btn-minus');
const divide = document.querySelector('#btn-divide');
const multiply = document.querySelector('#btn-multiply');

let op; 


add.addEventListener('click', () =>  {
  result.textContent = Number(input.value) + Number(result.textContent);
  op = 'add';
}
);


clear.addEventListener('click', () => {
  result.textContent = '0';
  input.value = '0';
}
);

equals.addEventListener('click', () => {
    if (op === 'add') {
    result.textContent = Number(result.textContent) + Number(input.value);
  } else if (op === 'sub') {
    result.textContent = Number(result.textContent) - Number(input.value);
  } else if (op === 'div') {
    result.textContent = Number(result.textContent) / Number(input.value);
  } else if (op === 'mult') {
    result.textContent = Number(result.textContent) * Number(input.value);
  }
}
);


minus.addEventListener('click', () => {
  result.textContent = Number(result.textContent) - Number(input.value);
  op = 'sub';
}
);

divide.addEventListener('click', () => {
  result.textContent = Number(result.textContent) /  Number(input.value);
  op = 'div';
}
);


multiply.addEventListener('click', () => {
  result.textContent = Number(result.textContent) *  Number(input.value);
  op = 'mult';
}
);



// Implement an equals button. The equals executes the last operation the user pressed on the calculator. We only have plus right now, but there will be others soon. You will need a variable op, where you save the last operation.

