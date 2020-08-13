const Adapter = require("./Adapter");

class Course extends Adapter{
	static save(id, data, options){
		if(id){
			//do an update
		}

		//create
	}

	static get(id){
		//get courses from database and request user from api
	}

	static find(params){

	}
}

module.exports = Course