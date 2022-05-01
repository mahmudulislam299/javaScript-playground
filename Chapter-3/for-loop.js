// for loops

for (let i = 0; i < 5 ; i++) {
	console.log('in loop: ', i);
}

console.log('loop finished');

const forNames = ['shaun', 'mario', 'luigi'];

for (i = 0; i < forNames.length; i++) {
	// console.log(forNames[i]);

	// build a template string for name
	let htmlLoop = `<div>${forNames[i]}</div>`;
	console.log(htmlLoop);
}