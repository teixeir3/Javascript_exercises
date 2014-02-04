function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

function Course(name, dept, credits, days, time) {
  this.courseName = name;
  this.dept = dept;
  this.credits = credits;
  this.days = days;
  this.time = time
  this.students = []
}

Student.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

Student.prototype.courses = function() {
  return this.courses;
};

// ubs.map(function(x){
//
//     var arr = [originalArr[originalArr.length - 1]];
//     x = x.concat(arr);
//
//     console.log(x);
//     return x;
//   });

Student.prototype.enroll = function(course) {
  // this.courses.map(function(enrolledCourse) {
//     enrolledCourse.conflictsWith(course)
//   }
  if (this.courses.indexOf(course) === -1) {
    this.courses.forEach(function(crs) {
      if (crs.conflictsWith(course)) {
        throw "You're busy, idiot!";
      }
    });
    this.courses.push(course);
    course.addStudent(this);
  // } else if (conflict) {
 //    return "You're busy, idiot!"
 //  } else {
 //    return "Nice try, loser!"
  }
};

Student.prototype.courseLoad = function() {
  var load = function(){};
  var currentCourse = "";

  for (var i = 0; i < this.courses.length; i++) {
    currentDept = this.courses[i].dept
    console.log(currentDept);
    if (load[currentDept]) {
      load[currentDept] += this.courses[i].credits;
    } else {
      load[currentDept] = this.courses[i].credits;
    }
  }

  return load;
};

Course.prototype.students = function() {
  return this.students;
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);

};

Course.prototype.conflictsWith = function(other) {
  var conflict = false;
  if (this.time === other.time) {
    this.days.forEach(function(day) {
      conflict = conflict || (other.days.indexOf(day) !== -1);
    });
  }

  return conflict;
  //
  // // if (this.time === course.time && (this.days == course.days)) {
  //   return true;
  // } else {
  //   return false;
  // }

};

var course1 = new Course("Chemistry", "Science", 3, ["Friday"], 1);
var course2 = new Course("Biology", "Science", 3, ["Tuesday", "Friday"], 2);
var course3 = new Course("Ruby", "App Academy", 3, ["Friday"], 1);
var course4 = new Course("Javascript", "App Academy", 3, ["Wednesday"], 3);

var student1 = new Student("Doug", "Tex");
var student2 = new Student("Mitchell", "Smith");
var student3 = new Student("Sennacy", "Cat");

console.log(student1.name());
console.log(student1.courses);
student1.enroll(course1);
console.log(course1.conflictsWith(course2));
student1.enroll(course2);
student1.enroll(course3);
// console.log(student1.courses);
//
// console.log(student1.courseLoad());
// console.log(course1.students);
// console.log(course1.conflictsWith(course2));