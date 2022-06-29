/*! *****************************************************************************
- Interpreter pattern example(Roman to decimal)
 e.g. I(1), V(5), X(10), L(50), C(100), D(500), M(100), 9(IX), 4(IV), 10(X), 1(I)
***************************************************************************** */

class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }

  /**
   * StartsWith
   *
   * Context 문자열(ROMAN_NUMBER)을 십진법으로 변환하기 위한 문자열 비교
   * @param {String} str - Expression's one, four, five, nine
   * @returns {Boolean} Boolean
   */
  startsWith(str) {
    return this.input.substr(0, str.length) === str;
  }
}

class Expression {
  constructor(name, one, four, five, nine, multiplier) {
    this.name = name;
    this.one = one;
    this.four = four;
    this.five = five;
    this.nine = nine;
    this.multiplier = multiplier;
  }

  /**
   * Interpreter
   *
   * @description
   * ROMAN_NUMBER 문자열을 십진법으로 변경
   * @example
   * Expression의 nine에 할당된 문자열의 길이만큼 잘라내어 ROMAN_NUMBER과 일치한다면 startsWith()는 해당 문자열을 반환
   * 그리고 context의 문자열의 0-1까지 잘라내고 context의 output 값에 (자리수 * 9)을 더하여 십진 값을 할당한다.
   * @param {Object} context - Context class
   * @returns
   */
  interpreter(context) {
    console.log("-----Input Context-----", context.input);
    if (context.input.length === 0) {
      console.log("input", context.input.length);
      return;
    } else if (context.startsWith(this.nine)) {
      // "", 900(CM), 90(XC), 9(IX)
      console.log("nine init", context.input, context.output, this.multiplier);
      context.output += this.multiplier * 9; // context.output = context.output + (100 * 9)
      context.input = context.input.substr(2); // Roman 표기 방법에 따른 문자열의 길이만큼 substr() 실행
      console.log("nine result", context.input, context.output);
    } else if (context.startsWith(this.four)) {
      // "", 400(CD), 40(XL), 4(IV)
      console.log("four init", context.input, context.output, this.multiplier);
      context.output += this.multiplier * 4;
      context.input = context.input.substr(2);
      console.log("four result", context.input, context.output);
    } else if (context.startsWith(this.five)) {
      // "", 500(D), 50(L), 5(V)
      console.log("five init", context.input, context.output, this.multiplier);
      context.output += this.multiplier * 5;
      context.input = context.input.substr(1); // Roman 표기 방법에 따른 문자열의 길이만큼 substr() 실행
      console.log("five result", context.input, context.output);
    }
    while (context.startsWith(this.one)) {
      // 1000(M), 100(C), 10(X), 1(I)
      console.log("one init", context.input, context.output, this.multiplier);
      context.output += this.multiplier * 1;
      context.input = context.input.substr(1);
      console.log("one result", context.input, context.output);
    }
  }
}

const ROMAN_NUMBER = "MCMXXVIII"; // 1928
const tree = [];
let context = new Context(ROMAN_NUMBER);

// Expression's arguments => name, one, four, five, nine, multiplier
tree.push(new Expression("thousand", "M", " ", " ", " ", 1000)); // 1000
tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100)); // 100, 400, 500, 900
tree.push(new Expression("ten", "X", "XL", "L", "XC", 10)); // 10, 40, 50, 90
tree.push(new Expression("one", "I", "IV", "V", "IX", 1)); // 1, 4, 5, 9

// Run Interpreter
const runInterpreter = () => {
  console.log("tree", tree);
  return tree.map((exp) => exp.interpreter(context));
};

// 실행
runInterpreter();

console.log("Run Interpreter result:", ROMAN_NUMBER + " = " + context.output);
