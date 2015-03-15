// Store a set of words in an array and display the contents both forward
// and backward. 

var newArray = [];


function addString (string) {
  this.newArray.push(string);
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

addString('Chia hella mixtape.');
addString('Bicycle rights ut Truffaut authentic.');
addString('tote bag dolor, plaid readymade accusamus hella.');

displayForwardOne(newArray);
displayForwardTwo(newArray);
displayBackward(newArray);