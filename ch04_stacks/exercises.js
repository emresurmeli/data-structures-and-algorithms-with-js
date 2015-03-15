/* Create a Stack data structure */

function Stack () {
  this.dataStore = [];
  this.top = top;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

function push (element) {
  this.dataStore[this.top++] = element;
}

function pop () {
  return this.dataStore[--this.top];
}

function peek () {
  return this.dataStore[this.top -1];
}

function length () {
  return this.top;
}

function clear () {
  this.top = 0;
}