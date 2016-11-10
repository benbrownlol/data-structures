class Queue {
  constructor() {
    this.queue = [];
  }
  add(data) {
    this.queue.push(data);
  }
  remove() {
    if (!this.queue.length) console.error('Queue is empty!');
    this.queue.shift();
  }
  access() {
    if (!this.queue.length) return 'Queue is empty!';
    return this.queue.shift();
  }
  run(fn) {
    if (fn) {
      while (this.queue.length) {
        fn(this.queue.shift());
      }
    }
  }
  length() {
    return this.queue.length;
  }
  print() {
    console.log(this.queue.join(' '));
  }
}

const example = new Queue();
