let user2 = {
	name: 'crystal',
	age: 30,
	email: 'crytal@gmail.com',
	location: 'Bangadesh',
	blogs: ['iot for bangladesh', 'IoT impact on business'],
	
	login: function() {
		console.log(`${this.name} logged in`);
	},
	
	logout: function() {
		console.log(`${this.name} logged out`);
	},

	logBlogs: function() {
		console.log(`${this.name} has written the following blogs: `);
		this.blogs.forEach((blog,index)=>{
			console.log(`${index} - ${blog}`);
		});
	},

};

user2.login();
user2.logout();
user2.logBlogs();