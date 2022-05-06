// premitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


// reference type
const userOne = {
	name: 'mahmud',
	age: 22
};

const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 50;
console.log(userOne, userTwo);
console.log('its change both bcoz of reference value');