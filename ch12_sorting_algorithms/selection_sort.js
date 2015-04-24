function selectionSort() {
  var min, temp;
  for (var outer = 0; outer <= this.datastore.length-2; ++outer) {
    min = outer;
    for (var inner = outer + 1;
    	 inner <= this.datastore.length-1; ++inner) {
    	if (this.datastore[inner] < this.datastore[min]) {
    	  min = inner;
    	}
        swap(this.datastore, outer, min);
    }
  }
}