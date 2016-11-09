class Storage {
  constructor() {
    this.array = []
  }
  add(data) {
    this.array.push(data);
  }
  remove(data) {
    this.array = this.array.filter((current) => current !== data);
  }
  length() {
    return this.array.length;
  }
  searchByData(data) {
    let index = this.array.indexOf(data);

    if (index === -1) return 'Data not found';
    return index;
  }
  searchByIndex(index) {
    return this.array[index];
  }
  print() {
    console.log(this.array.join(' '));
  }
}

const example  = new Storage();
