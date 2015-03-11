// Exercise 1, create a Grades object that stores a set of student grades in an
// object. Provide a function for adding and a function for displaying the 
// student's grade average.

function Grades () {
  this.grades = [];
  this.addGrade = addGrade;
  this.average = average;
}

function addGrade (grade) {
  this.grades.push(grade);
}

function average () {
  var total = 0;
  for(var i = 0; i < this.grades.length; ++i) {
    total += this.grades[i];
  }
  return total / this.grades.length;
}