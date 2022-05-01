const age = 25;

if (age > 20) {
	console.log('you are over 20 years old');
}

const ninjasIf = ['mahmudul', 'islam', 'robince'];

if(ninjasIf.length > 2) {
	console.log('there is a lot of ninjas');
}


// const password = 'passWord123';
const password = 'p@ss123456789';

if(password.length >= 12 && password.includes('@')) {
	console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@')) {
	console.log('your password is strong enoguh');
} else {
	console.log('your password is not strong');
}


// switch statemets

const grade = 'D';

switch(grade) {
	case 'A':
		console.log('you got A');
		break;
	case 'B':
		console.log('you got B');
		break;
	case 'C':
		console.log('you got C');
		break;
	case 'D':
		console.log('you got D');
		break;
	default: 
		console.log('this is not a valid grade');
		break;

}