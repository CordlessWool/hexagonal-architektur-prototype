const Course = require("../domain/Course");

class CourseService{
	constructor(CourseAdapter){
		this.CourseAdapter = CourseAdapter;
	}

	async createCourse(name, teachers){
		const course = new Course(name, teachers);
		//make copie so Asapter can not manipulate Domain objects
		this.CourseAdapter.save(course.getJSON())
	}

	async duplicateCouse(uuid){
		const course = this.CourseAdapter.get(uuid);
		const newCourse = course.duplicateCouse();
		//make copie so Asapter can not manipulate Domain objects
		this.CourseAdapter.save(newCourse.getJSON());
	}
}