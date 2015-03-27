// Node class for inserting new nodes to the linked list. 
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = previous;
}

// the linkedList class provides functionality for the linked list
function linkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
       currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = current.next;
    }
}

function displayReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

function findLast(item) {
    var currNode = this.head;
    while(!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}

// remove function links the previous node from the one we remove, and
// links it to the one that is after the node that we remove. 
function remove(item) {
    var currNode = this.find(item);
    if (!(prevNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}