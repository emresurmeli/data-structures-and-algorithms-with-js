// Store a set of words in an array and display the contents both forward
// and backward. 

var array = [];

function addString (string) {
  this.array.push(string);
}

function displayForwardOne (array) {
  return array.toString();
}

function displayForwardTwo (array) {
  return array.join();
}

function displayBackward (array) {
  return array.reverse();
}