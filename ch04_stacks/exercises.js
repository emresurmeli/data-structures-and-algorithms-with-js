/* Create a Stack data structure */

function Stack () {
  this.dataStore = [];
  this.top = top;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

/* Create a push function to add elements to the Stack */

function push (element) {
  this.dataStore[this.top++] = element;
}

/* Create a pop function to remove elements from the Stack */

function pop () {
  return this.dataStore[--this.top];
}

/* Create a peek function to take a look at what is on top of the Stack */

function peek () {
  return this.dataStore[this.top -1];
}

/* Create a length function to check... you know, the length of the Stack */

function length () {
  return this.top;
}

/* Create a clear function to erase all the elements in the Stack */

function clear () {
  this.top = 0;
}