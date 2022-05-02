let user3 = {
	name: 'mahmudul islam',
	age: 24,
	email: 'mahmudulislam299@gmail.com',
	location: 'Bangadesh',
	blogs: [
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
	],

	// methods

	login: function() {
		console.log(`${this.name} logged in`);
	},
	
	logout: function() {
		console.log(`${this.name} logged out`);
	},

	logBlogs: function() {
		console.log(`${this.name} has written the following blogs: `);
		this.blogs.forEach((blogObject,index)=>{
			console.log(`${index} - ${blogObject.title} - ${blogObject.publish} - ${blogObject.likes} - ${blogObject.randomNumber}`);
		});
	},
	logBlogs2: function() {
		console.log(`${this.name} has written the following blogs: `);
		for(let i = 0; i < this.blogs.length; i++) {
			console.log(`${this.blogs[i].title} --- ${this.blogs[i].publish} --- ${this.blogs[i].likes} --- ${this.blogs[i].randomNumber}`);
		}
	}
}

user3.login();
user3.logout();
user3.logBlogs();
user3.logBlogs2();

