class Stack {
  constructor() {
    this.stack = [];
  }
  add(data) {
    this.stack.push(data);
  }
  remove() {
    if (!this.stack.length) console.error('Stack is empty!');
    this.stack.pop();
  }
  access() {
    if (!this.stack.length) return 'Stack is empty!';
    return this.stack.pop();
  }
  run(fn) {
    if (fn) {
      while (this.stack.length) {
        fn(this.stack.pop());
      }
    }
  }
  length() {
    return this.stack.length;
  }
  print() {
    console.log(this.stack.join(' '));
  }
}

const example = new Stack();
