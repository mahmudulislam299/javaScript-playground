// object literals

let user1 = {
	name : 'Crystal',
	age :30, 
	email: 'crystal@gmail.com',
	location: 'Bangadesh',
	blogs: ['IoT impact on business', 'Future IoT Technology']
};

console.log(user1);
console.log('type of user1: ', typeof user1);

// way to access to properties
console.log(user1.name);

user1.age = 25;
console.log(user1.age);

// another way to access to properties
console.log(user1['name']);
console.log(user1['age']);
user1['location'] = 'USA';
console.log(user1['location']);