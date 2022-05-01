// variable & block scope

let varAge = 30; 

if(true) {
	let varAge = 40; // recreated variable in local scope
	let varName = 'mahmud';
	console.log('inside 1st code block', varAge, varName);
}
// console.log('outside code block', varAge, varName);
console.log('outside code block', varAge);



// scope

let varNum = 30;

if(true) {
	let varNum= 40;
	console.log('inside 1st scope', varNum);

	if(true) {
		let varNum = 50;
		console.log('inside 2nd code block ', varNum);
	}
}

console.log('outside code block', varNum);