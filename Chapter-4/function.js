// function declaration

function greet() {
	console.log('hello there');
}

// function expression
// put ; at the end of function expression
const speak = function() {
	console.log('good day!');
};

const calcArea = function(radius) {
	return 3.14 * radius **2;
};

// const bill = function(products, tax) {
// 	let total = 0;
// 	for (let i = 0; i < products.length; i++) {
// 		total += products[i] + products[i] * tax;
// 	}
// 	return total;
// }

const bill = (products, tax) => {
	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i] + products[i] * tax;
	}
	return total;
};

// arrow function 
// const calcArea = radius => 3.14 * radius**2;
const calcVol = radius => 4/3*3.14*radius**3;

// arguments & parameters
const speakName = function(nameFunc = 'robince',time='day') {
	console.log(`Good ${time}, ${nameFunc}`)
}


//function call
greet();
speak();
speakName('mahmud', 'morning');
speakName();
const area = calcArea(5);
console.log('area: ', area);
const vol = calcVol(5);
console.log('volume: ', vol);

console.log('total bill: ', bill([10,15,20], 0.2));