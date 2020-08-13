const {Persons} = require("./Persons");

class Lesson{
	constructor(creater, name){
		//validate name and person

		if(!creater.hasPermission('CREATE_LESSON')) throw new Error('missing permission');
		this.name = name;
		this.createdBy = creater;
	}
}