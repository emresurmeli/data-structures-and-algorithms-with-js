/* Create a List data structure */

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //initializes an empty array to store list elements
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

/* Create a function to insert elements into the List */

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    ++ this.listSize;
    return true;
  }
  return false;
}

/* Create a funciton to remove elements from the List */

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

/* Create a function that determines the number of elements in a list */

function length() {
  return this.listSize;
}

/* Create a function */

// function insertIfLarger(element) {
//   var isLarger = true;
//   isLarger ? insert(element, 0) : !!insert;
// }