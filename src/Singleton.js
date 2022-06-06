/**
 * Singleton Pattern
 * @description
 */
class Singleton {
  instance = null;

  constructor() {
    this.getInstance();
  }

  createInstance() {
    let object = new Object("Instance A");
    return object;
  }

  /**
   * getInstance
   * @description
   * Returns the unique instance.
   */
  getInstance() {
    if (this.instance === null) {
      this.instance = this.createInstance();
      console.log("A instance", this.instance);
    } else {
      this.instance = null;
      console.log("B instance", this.instance);
    }
  }
}

let instanceA = new Singleton();
let instanceB = new Singleton();

console.log("instanceA", instanceA);
console.log("instanceB", instanceB);

console.log("isSingleton", instanceA.getInstance() === instanceB.getInstance());
