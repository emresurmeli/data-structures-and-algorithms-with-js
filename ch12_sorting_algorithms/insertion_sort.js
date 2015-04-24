function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer <= this.datastore.length-1; ++outer) {
    temp = this.datastore[outer];
    inner = outer;
    while (inner > 0 && (this.datastore[inner-1] >= temp)) {
      this.datastore[inner] = this.datastore[inner-1];
      --inner;
    }
    this.datastore[inner] = temp;
  }
}