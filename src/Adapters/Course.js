const Adapter = require("./Adapter");

class Course extends Adapter{
	static save(data, options){
		if(data.uuid){
			//do an update
		}
		//create
	}

	static get(id){
		//get courses from database and request user from api
	}

	static find(params){
		//find a course and get user data from user
	}
}

module.exports = Course