const blogs = [
	{
		title: 'IoT for Bangladesh',
		likes: 20,
		publish: '22/02/1971',
		randomNumber: [10,20,30],
	},
	{
		title: 'IoT impact on business',
		likes: 50,
		publish: '22/02/1972',
		randomNumber: [40,50,60],
	},
	{
		title: 'top 10 skills for IoT',
		likes: 30,
		publish: '22/02/1972',
		randomNumber: [70,80,90],
	},
];

// print all the likes, title and publish date

for(let i = 0 ; i < blogs.length ; i++) {
	console.log(`${blogs[i].title} -- ${blogs[i].likes} -- ${blogs[i].publish}`);
}

blogs.forEach(iotObject => {
	console.log(`${iotObject.title} ** ${iotObject.likes} ** ${iotObject.publish} ** ${iotObject.randomNumber}`);
	iotObject.randomNumber.forEach(n => {
		console.log(n);
	});
});

console.log('first element: ', blogs[0].randomNumber[0]);