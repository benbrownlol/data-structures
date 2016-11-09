class Node {
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  append(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.numberOfValues++;
  }
  remove(data) {
    let previous = this.head;
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
        this.numberOfValues--;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
  traverse(fn) {
    let current = this.head;

    while (current) {
      if (fn) fn(current);
      current = current.next;
    }
  }
  length() {
    return this.numberOfValues;
  }
  print() {
    let string = '';
    let current = this.head;

    while(current) {
      string += current.data + ' ';
      current = current.next;
    }

    console.log(string.trim());
  }
}

const example = new LinkedList();
