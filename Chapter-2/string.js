// strings
console.log('hello world');

let email = 'mahmudulislam299@gmail.com';
console.log(email);


// string concatenation
let firstName = 'Mahmudul';
let lastName= 'Islam';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[2]);


// string length
console.log(fullName.length);

// string method
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);


let index = email.indexOf('@');
console.log(index);


// common string method
let lastIndex = email.lastIndexOf('.');
console.log(lastIndex);

let slice = email.slice(8,13);
console.log(slice);

let subString = email.substring(3,7);
console.log(subString);

let rep = email.replace('m','w');
console.log(rep);