/*! *****************************************************************************
- Template Method Pattern(22.08.13 - 작성 중)
***************************************************************************** */

// 추상화 된 객체
const dataStore = {
  process() {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  },
};

/**
 * @class Inherit
 *
 * @param {Object} proto - dataStore 추상화되어 있는 객체
 *
 * @return new
 */
class Inherit {
  constructor(proto) {
    this._proto = proto;
  }

  get proto() {
    return this._proto.process();
  }

  set proto(props) {
    this._proto.process() = props;
  }
  
}

let mySql = new Inherit(dataStore); // 구체적인 클래스를 작성하기 위한 mySQL, 이후 Method를 할당

// implement methods
mySql._proto.connect = () => {
  console.log("MySQL: connect");
};

mySql._proto.select = () => {
  console.log("MySQL: select");
};

mySql._proto.disconnect = () => {
  console.log("MySQL: disconnect");
};

// run process method
mySql._proto.process();

