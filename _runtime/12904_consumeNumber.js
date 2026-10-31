// _runtime/12904_consumeNumber.js
import _mod12833 from "metro/12833__.js";

function consumeNumber() {
  const self = this;
  const scanner = this.scanner;
  scanner.skipWS();
  const consumeResult = this.consume(Number);
  for (let num = 0; num < consumeResult.length; num = num + 1) {
    let charCodeAtResult = consumeResult.charCodeAt(num);
    let obj = _mod12833;
    let isDigitResult = obj.isDigit(charCodeAtResult);
    if (!isDigitResult) {
      isDigitResult = 46 === charCodeAtResult;
    }
    if (!isDigitResult) {
      let errorResult = self.error("Unsigned number is expected", self.scanner.tokenStart - consumeResult.length + num);
    }
  }
  if (0 === Number(consumeResult)) {
    self.error("Zero number is not allowed", self.scanner.tokenStart - consumeResult.length);
  }
  return consumeResult;
}
const Number = _mod12833.TYPE.Number;
const Delim = _mod12833.TYPE.Delim;
let obj = {
  name: "Ratio",
  structure: null,
  parse() {
    const self = this;
    const call = consumeNumber.call;
    if (typeof call === "unknown") {
      const scanner = self.scanner;
      scanner.skipWS();
      const consumeResult = self.consume(Number);
      for (let num4 = 0; num4 < consumeResult.length; num4 = num4 + 1) {
        let charCodeAtResult = consumeResult.charCodeAt(num4);
        let obj = _mod12833;
        let isDigitResult = obj.isDigit(charCodeAtResult);
        if (!isDigitResult) {
          isDigitResult = 46 === charCodeAtResult;
        }
        if (!isDigitResult) {
          let errorResult = self.error(
            "Unsigned number is expected",
            self.scanner.tokenStart - consumeResult.length + num4,
          );
        }
      }
      const _Number = Number;
      let callResult = consumeResult;
      if (0 === Number(consumeResult)) {
        self.error("Zero number is not allowed", self.scanner.tokenStart - consumeResult.length);
        callResult = consumeResult;
      }
    } else {
      callResult = call(self);
    }
    const scanner2 = self.scanner;
    scanner2.skipWS();
    const scanner3 = self.scanner;
    if (!scanner3.isDelim(47)) {
      self.error("Solidus is expected");
    }
    self.eat(Delim);
    const call2 = consumeNumber.call;
    if (typeof call2 === "unknown") {
      const scanner4 = self.scanner;
      scanner4.skipWS();
      const consumeResult1 = self.consume(Number);
      for (let num8 = 0; num8 < consumeResult1.length; num8 = num8 + 1) {
        let charCodeAtResult1 = consumeResult1.charCodeAt(num8);
        let obj2 = _mod12833;
        let isDigitResult1 = obj2.isDigit(charCodeAtResult1);
        if (!isDigitResult1) {
          isDigitResult1 = 46 === charCodeAtResult1;
        }
        if (!isDigitResult1) {
          let errorResult3 = self.error(
            "Unsigned number is expected",
            self.scanner.tokenStart - consumeResult1.length + num8,
          );
        }
      }
      const _Number2 = Number;
      let call2Result = consumeResult1;
      if (0 === Number(consumeResult1)) {
        self.error("Zero number is not allowed", self.scanner.tokenStart - consumeResult1.length);
        call2Result = consumeResult1;
      }
    } else {
      call2Result = call2(self);
    }
    const rect = {
      type: "Ratio",
      loc: self.getLocation(this.scanner.tokenStart, self.scanner.tokenStart),
      left: callResult,
      right: call2Result,
    };
    return rect;
  },
  generate(left) {
    this.chunk(left.left);
    this.chunk("/");
    this.chunk(left.right);
  },
};
let rect = { left: String, right: String };
obj.structure = rect;

export default obj;
