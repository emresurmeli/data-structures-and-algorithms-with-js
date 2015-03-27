// Node class for inserting new nodes to the linked list. 
function Node(element) {
    this.element = element;
    this.next = null;
}

// the linkedList class provides functionality for the linked list
function linkedList() {
    this.head = new Node("head");
    this.head.next = this.head;
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
    current.next = newNode;
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null) && 
          !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = current.next;
    }
}

// In order to remove a node, we need to find the node that is just
// before the node that we want to remove, hence, the findPrevious() 
// function. 
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
      currNode = currNode.next;
    }
    return currNode;
}

// remove function links the previous node from the one we remove, and
// links it to the one that is after the node that we remove. 
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}