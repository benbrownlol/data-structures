class HashTable {
  constructor() {
    // remove prototype chain from hashtable object
    this.values = Object.create(null);
    this.numberOfValues = 0;
    this.hashTag = Math.floor((Math.random() * 10) + 1);
    this.calculateHash = (key) => {
      return key.toString().length % this.hashTag;
    };
  }
  add(key, value) {
    const hash = this.calculateHash(key);

    if(!this.values[hash]) {
      this.values[hash] = {}
    };
    if(!this.values[hash][key]) {
      this.numberOfValues++
    };

    this.values[hash][key] = value;
  }
  remove(key) {
    const hash = this.calculateHash(key);

    if(this.values[hash] && this.values[hash][key]) {
      delete this.values[hash][key];
      this.numberOfValues--;
    }
  }
  search(key) {
    const hash = this.calculateHash(key);

    if (this.values[hash] && this.values[hash][key]) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }
  length() {
    return this.numberOfValues;
  }
  print() {
    let string = '';

    for(var value in this.values) {
      for(var key in this.values[value]) {
        string += this.values[value][key] + ' ';
      }
    }
    console.log(string.trim());
  }
}

const hash = new HashTable();
