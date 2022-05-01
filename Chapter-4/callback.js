// callbacks & foreach

// const myFunc = (callbackFunc) => {
// 	let value = 50;
// 	callbackFunc(value);
// };

// myFunc(function(value)){

// }

// method & forEach
let people = ['mahmudul', 'islam', 'robince', 'mahmud'];

people.forEach(function(person, index){
	console.log(person, index);
});

const logPerson = (person, index) => {
	console.log(`${index} - hello ${person}`);
}

// convert it arrow function 

people.forEach((person, index) => console.log(person, index));

people.forEach(logPerson);


// get a reference to the 'ul'
const ul = document.querySelector('.people');
let htmlPeople = ``;

people.forEach((person) => {
	//create html templet
	htmlPeople += `<li>${person}</li>`
});

console.log(htmlPeople);
ul.innerHTML = htmlPeople;