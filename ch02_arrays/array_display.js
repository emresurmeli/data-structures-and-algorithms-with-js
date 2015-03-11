// Store a set of words in an array and display the contents both forward
// and backward. 

/* create empty array */
var array = [];

/* create a function to add string to the array object */
function addString (string) {
  this.array.push(string);
}

/* create a function to display the contents of the array forward
   using the .toString() method */
function displayForwardOne (array) {
  return array.toString();
}

/* create a funciton to display the contents of the array forward
   using the .join() method */
function displayForwardTwo (array) {
  return array.join();
}

/* create a function to display the contents of the array backwards
   using the .reverse() method */
function displayBackward (array) {
  return array.reverse();
}