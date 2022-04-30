//booleans & comparisons
console.log(true, false, "true", "false");


// method can return booleans
let emailBool = 'mahmudulislam299@gmail.com';
let namesBool = ['mahmudul', 'islam', 'robince'];


// let resultBool = emailBool.includes('@');
// let resultBool = emailBool.includes('#');
let resultBool = namesBool.includes('islam');
console.log(resultBool);


// comparison operators
let ageBool = 25;
console.log(ageBool == 25);
console.log(ageBool == 30);
console.log(ageBool != 30);
console.log(ageBool > 20);
console.log(ageBool < 20);


let nameBool = 'mahmud';
console.log(nameBool== 'mahmud');
console.log(nameBool== 'mahmudul');
console.log(nameBool > 'za');
console.log(nameBool < 'za');


console.log(ageBool == 25);
console.log(ageBool =='25'); // convert sting to number
console.log(ageBool != 25);
console.log(ageBool !='25');

console.log(ageBool === 25);
console.log(ageBool === '25'); // compare value and type
console.log(ageBool !== 25);
console.log(ageBool !== '25');