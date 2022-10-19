// let array = [3, 5, 9, 12, 15];

// let newArray = array.reduce((newarr, el) => {
// 	if (el % 5 == 0 && el % 3 == 0) {
// 		newarr.push('FizzBuzz');
// 	} else if (el % 3 == 0) {
// 		newarr.push('Fizz');
// 	} else if (el % 5 == 0) {
// 		newarr.push('Buzz');
// 	}

// 	return newarr;
// }, []);

// console.log(newArray);

// let count = 0;

// let inter = setInterval(() => {
// 	console.log(++count);
// }, 2000);

// setTimeout(() => {
// 	clearInterval(inter);
// }, 10000);

// const elForm = document.querySelector('.js-form');
// const elInp = document.querySelector('.js-inp');
// const elTitle = document.querySelector('.title');

// elForm.addEventListener('submit', function (evt) {
// 	evt.preventDefault();

// 	let count = elInp.value;

// 	let inter = setInterval(() => {
// 		elTitle.textContent = count--;
// 	}, 1000);

// 	let stop = 1000 * elInp.value + 1000;

// 	setTimeout(() => {
// 		clearInterval(inter);
// 	}, stop);
// });

const elIframeUp = document.querySelector('.iframe-up');
let result = document.querySelector('.result');

elIframeUp.addEventListener('click', function (evt) {
	elIframeUp.style.opacity = '1';

	let count = 10;

	let reclam = setInterval(() => {
		result.textContent = count--;
	}, 1000);

	setTimeout(() => {
		clearInterval(reclam);
		result.textContent = 'X';
		result.style.color = '#ff0000';
	}, 11000);

	if (result.textContent == 'X') {
		if (evt.target.matches('.result')) {
			elIframeUp.style.opacity = '0';
			elIframeUp.style.right = '0';
			elIframeUp.style.left = '700px';
		}
	}
});
