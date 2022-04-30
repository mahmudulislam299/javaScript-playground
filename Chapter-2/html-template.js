const title = 'Best reads of 2019';
const author = 'Mario';
const like = 30;

// concatenation way
let results = 'The blog called ' + title + ' by ' + author + ' has ' + like + ' likes';
console.log(results);

// template string way
// use ##`## not ##'##
results = `The blog called ${title} by ${author} has ${like} likes`
console.log(results);

//creating html template
let html = `
	<h2>${title}</h2>
	<p>By ${author}</p>
	<span>This blog has ${like} likes</span>
`;
console.log(html);