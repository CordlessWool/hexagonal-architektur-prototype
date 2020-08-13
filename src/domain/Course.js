const { Pupil, Teacher, Person } = require("./Persons")

class Course {
	constructor({
		//some uniq value
		uuid,
		creater,
		name,
		teachers,
		/*
			color,

		*/
	}){
		if(typeof name !== 'string') throw new Error('name have to be string')
		if(!Array.isArray(teachers) || !(teachers instanceof Teacher)) throw new Error('teachers need to be an Array of Teachers')
		if(!(creater instanceof Person)) throw new Error('creater is not a person')
		if(!creater.hasPermission('CREATE_COURSE')) throw new Error('missing permission');

		this.uuid = uuid;
		this.name = name;
		this.teachers = teachers;
		this.lessons = [];
		this.homework = [];
		this.createdBy = creater;
		this.chnagedBy = creater;
	}

	addLesson(changer, lesson){
		//type check

		if(!changer.hasPermission('EDIT_COURSE')) throw new Error('missing permission');
		this.lessons.push(lesson);
		this.chnagedBy = changer;
	}

	setPupils(changer, ...pupils){
		if(!changer.hasPermission('EDIT_COURSE')) throw new Error('missing permission');
		if(!(pupils[0] instanceof Pupil)) throw new Error('pupils need to be an Array of Pupils')
		this.pupils = pupils;
	}

	duplicateCourse(){
		const n = this.getCopy();
		n.lessons = [];
		n.referenceCourse(this);
		this.referenceCourse(n);
	}

	getCopy(){
		return this.getOwnPropertiyNames.reduce((acc, attr) => {
			acc[attr] = this[attr];
			return acc;
		}, {})
	}

	getJSON(){
		return JSON.parse(JSON.stringify(this));
	}
}

module.exports = Course;