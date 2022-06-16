// Click Event
class Click {
  handlers = [];

  /**
   * subscribe
   * @param {Function} fn Event Handler
   */
  subscribe(fn) {
    this.handlers.push(fn);
  }

  /**
   * unsubscribe
   * @param {Funciton} fn Event Handler
   */
  unSubscribe(fn) {
    this.handlers = this.handlers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
  }

  /**
   * fire
   * @param {String} arg Argument for "this"
   * @return this 와 arguments 를 매개로 호출된 함수의 반환값
   */
  fire(arg) {
    let isServer = typeof window !== "undefined";
    if (isServer) return;

    this.handlers.forEach((fn) => {
      fn.call(this, arg); // 구독 한 event에 arg를 바인딩
    });
  }
}

const clickHandlers = (item) => {
  console.log("fired +", item);
};

let click = new Click();

click.subscribe(clickHandlers);
click.fire("First Event");
click.unSubscribe(clickHandlers);
click.fire("Seconde Event");
click.subscribe(clickHandlers);
click.fire("Third Event");
