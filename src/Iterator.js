/*! *****************************************************************************
- Iterator pattern 
***************************************************************************** */

/**
 * @class Iterator
 *
 * @param {Array} Items - various types items
 */
class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  first() {
    this.reset();
    return this.next();
  }

  next() {
    return this.items[this.index++];
  }

  hasNext() {
    return this.index <= this.items.length;
  }

  reset() {
    this.index = 0;
  }

  /**
   * @method each
   *
   * @param {Function} callback
   */
  each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

const items = [3, "apple", "javascript", "python", false];

const iter = new Iterator(items);

// for loop
for (let item = iter.first(); iter.hasNext(); item = iter.next()) {
  console.log("for", item);
}

console.log("---");

// iterator each method
iter.each((item) => {
  console.log("iter", item);
});
