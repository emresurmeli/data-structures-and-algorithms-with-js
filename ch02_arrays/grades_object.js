// Exercise 1, create a Grades object that stores a set of student grades in an
// object. Provide a function for adding and a function for displaying the 
// student's grade average.


/* Create Grades class */
function Grades () {
  this.grades = [];
  this.addGrade = addGrade;
  this.average = average;
}

/* Create addGrade function that adds grades data to an array */
function addGrade (grade) {
  this.grades.push(grade);
}

/* Create an average function that calculates and returns the 
average of the grades in an array */
function average () {
  var total = 0;
  for(var i = 0; i < this.grades.length; ++i) {
    total += this.grades[i];
  }
  return total / this.grades.length;
}