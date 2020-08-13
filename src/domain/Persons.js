class Person{
	constructor(
		firstname,
		lastname,
	){
		if(typeof firstname !== 'string') throw new Error('some text')
		if(typeof lastname !== 'string') throw new Error('some text')

		this.lastname = lastname;
		this.firstname = firstname;
		this.permissions = [];
	}

	hasPermission(permission){
		//check permission value

		return this.permissions.includes(permission);
	}
}


class Pupil extends Person{

	constructor(
		firstname,
		lastname
	){
		super(firstname, lastname);
		this.prmissions.concat([
			'VIEW_COURSE',
			'VIEW_LESSON',
		]);
	}
}

class Teacher extends Person{
	constructor(
		firstname,
		lastname
	){
		super(firstname, lastname);
		this.prmissions.concat([
			'VIEW_COURSE',
			'VIEW_LESSON',
			'CREATE_COURSE',
			'CREATE_LESSON',
		]);
	}
}



module.exports = {
	Person,
	Teacher,
	Pupil
}