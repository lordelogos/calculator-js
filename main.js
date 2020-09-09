const buttons = document.querySelector('#buttons');
const btns = buttons.getElementsByClassName('btn');
const display = document.querySelector('#input');
let equals = document.querySelector('.eq');
let clear = document.querySelector('.c');

Array.from(btns).forEach(btn => 
	btn.addEventListener('click', input));

function input(e){
	display.textContent += e.target.textContent;
}

equals.addEventListener('click', equalsto)

function equalsto(e){
	var equation = stringMath(display.textContent);
	display.textContent = equation;
}

clear.addEventListener('click', clearScreen);

function clearScreen(e){
	display.textContent = '';
}