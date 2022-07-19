let count = [];
let countStr = count.join('');

document
	.querySelector('.calculator-buttons')
	.addEventListener('click', buttonValue);
function buttonValue() {
	let buttonVal = event.target.value;
	if (buttonVal == '=') {
		let allSum = eval(count.join(''));
		console.log(allSum);
		document.querySelector('#screen').value = allSum;
		count = [];
	} else if (buttonVal != undefined && buttonVal != 'reset') {
		// console.log(buttonVal);
		// document.querySelector('#screen').value = event.target.innerText;
		count.push(buttonVal);
		console.log(count.join(''));
		document.querySelector('#screen').value = count.join('');
	}
	if (buttonVal == 'reset') {
		count = [];
		document.querySelector('#screen').value = 0;
	}
}
