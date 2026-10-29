// === Module 12735: eatHexSequence ===

// Module 12735 (eatHexSequence)
import _mod12657 from "module_12657" /* 12657 */;

function eatHexSequence(sum2, arg1) {
  const self = this;
  let sum = this.scanner.tokenStart + sum2;
  let num = 0;
  let num2 = 0;
  if (sum < this.scanner.tokenEnd) {
    while (true) {
      let source = self.scanner.source;
      let charCodeAtResult = source.charCodeAt(sum);
      if (45 === charCodeAtResult) {
        if (arg1) {
          if (0 !== num) {
            break;
          }
        }
      }
      let obj = _mod12657;
      if (obj.isHexDigit(charCodeAtResult)) {
        let sum1 = num + 1;
        if (6 < sum1) {
          let errorResult = self.error("Too many hex digits", sum);
        }
        sum = sum + 1;
        num = sum1;
        num2 = sum1;
      } else {
        if (!arg1) {
          let str = "Unexpected input";
          if (num < 6) {
            str = "Hex digit is expected";
          }
          let tmp7Result = tmp7(str, sum);
        }
        let str2 = "";
        if (num < 6) {
          str2 = " or hex digit";
        }
        let _HermesInternal = HermesInternal;
        str = "HyphenMinus" + str2 + " is expected";
      }
    }
    const call = eatHexSequence.call;
    sum2 = sum2 + num + 1;
    if (typeof call === "unknown") {
      let callResult = eatHexSequence(sum2, false);
    } else {
      callResult = call(self, sum2, false);
    }
    if (0 === callResult) {
      self.error();
    }
    return -1;
  }
  self.scanner.next();
  return num2;
}
function eatQuestionMarkSequence(arg0) {
  let scanner2;
  const self = this;
  const scanner = this.scanner;
  let num = 0;
  if (scanner.isDelim(63)) {
    do {
      let sum = num + 1;
      if (sum > arg0) {
        let errorResult = self.error("Too many question marks");
      }
      let iter = self.scanner;
      let nextResult = iter.next();
      scanner2 = self.scanner;
      num = sum;
    } while (scanner2.isDelim(63));
  }
}
function startsWith(arg0) {
  const self = this;
  const source = this.scanner.source;
  if (source.charCodeAt(this.scanner.tokenStart) !== arg0) {
    self.error(`${_mod12657.NAME[arg0]} is expected`);
  }
}
function scanUnicodeRange() {
  let scanner10;
  let scanner3;
  let scanner6;
  let scanner8;
  const self = this;
  const scanner = this.scanner;
  if (scanner.isDelim(43)) {
    iter.next();
    if (self.scanner.tokenType === Ident) {
      const call10 = eatHexSequence.call;
      if (typeof call10 === "unknown") {
        let call10Result = eatHexSequence(0, true);
      } else {
        call10Result = call10(self, 0, true);
      }
      if (call10Result > 0) {
        const call11 = eatQuestionMarkSequence.call;
        const diff = 6 - call10Result;
        if (typeof call11 === "unknown") {
          const scanner9 = self.scanner;
          let num22 = 0;
          if (scanner9.isDelim(63)) {
            do {
              let sum = num22 + 1;
              if (diff < sum) {
                let errorResult = self.error("Too many question marks");
              }
              let iter6 = self.scanner;
              let nextResult1 = iter6.next();
              scanner10 = self.scanner;
              num22 = sum;
            } while (scanner10.isDelim(63));
          }
        } else {
          const call11Result = call11(self, diff);
        }
      }
    } else {
      const scanner11 = self.scanner;
      if (scanner11.isDelim(63)) {
        self.scanner.next();
        const call9 = eatQuestionMarkSequence.call;
        if (typeof call9 === "unknown") {
          const scanner7 = self.scanner;
          let num16 = 0;
          if (scanner7.isDelim(63)) {
            do {
              let sum1 = num16 + 1;
              if (5 < sum1) {
                let errorResult1 = self.error("Too many question marks");
              }
              let iter5 = self.scanner;
              let nextResult3 = iter5.next();
              scanner8 = self.scanner;
              num16 = sum1;
            } while (scanner8.isDelim(63));
          }
        } else {
          call9(self, 5);
        }
        const iter4 = self.scanner;
      } else {
        self.error("Hex digit or question mark is expected");
      }
    }
  } else if (iter.tokenType === Number) {
    const call4 = startsWith.call;
    if (typeof call4 === "unknown") {
      const source2 = self.scanner.source;
      if (source2.charCodeAt(self.scanner.tokenStart) !== 43) {
        self.error(`${_mod12657.NAME[43]} is expected`);
      }
    } else {
      call4(self, 43);
    }
    const call5 = eatHexSequence.call;
    if (typeof call5 === "unknown") {
      let call5Result = eatHexSequence(1, true);
    } else {
      call5Result = call5(self, 1, true);
    }
    const scanner4 = self.scanner;
    if (!scanner4.isDelim(63)) {
      const call6 = startsWith.call;
      if (typeof call6 === "unknown") {
        const source3 = self.scanner.source;
        if (source3.charCodeAt(self.scanner.tokenStart) !== 45) {
          self.error(`${_mod12657.NAME[45]} is expected`);
        }
      } else {
        call6(self, 45);
      }
      const call7 = eatHexSequence.call;
      if (typeof call7 === "unknown") {
        eatHexSequence(1, false);
      } else {
        call7(self, 1, false);
      }
    }
    const call8 = eatQuestionMarkSequence.call;
    const diff1 = 6 - call5Result;
    if (typeof call8 === "unknown") {
      const scanner5 = self.scanner;
      let num13 = 0;
      if (scanner5.isDelim(63)) {
        do {
          let sum2 = num13 + 1;
          if (diff1 < sum2) {
            let errorResult5 = self.error("Too many question marks");
          }
          let iter3 = self.scanner;
          let nextResult4 = iter3.next();
          scanner6 = self.scanner;
          num13 = sum2;
        } while (scanner6.isDelim(63));
      }
    } else {
      call8(self, diff1);
    }
  } else {
    if (self.scanner.tokenType === Dimension) {
      const call = startsWith.call;
      if (typeof call === "unknown") {
        const source = self.scanner.source;
        if (source.charCodeAt(self.scanner.tokenStart) !== 43) {
          self.error(`${_mod12657.NAME[43]} is expected`);
        }
      } else {
        call(self, 43);
      }
      const call2 = eatHexSequence.call;
      if (typeof call2 === "unknown") {
        let call2Result = eatHexSequence(1, true);
      } else {
        call2Result = call2(self, 1, true);
      }
      if (call2Result > 0) {
        const call3 = eatQuestionMarkSequence.call;
        const diff2 = 6 - call2Result;
        if (typeof call3 === "unknown") {
          const scanner2 = self.scanner;
          let num6 = 0;
          if (scanner2.isDelim(63)) {
            do {
              let sum3 = num6 + 1;
              if (diff2 < sum3) {
                let errorResult7 = self.error("Too many question marks");
              }
              let iter2 = self.scanner;
              let nextResult5 = iter2.next();
              scanner3 = self.scanner;
              num6 = sum3;
            } while (scanner3.isDelim(63));
          }
        } else {
          const call3Result = call3(self, diff2);
        }
      }
    } else {
      self.error();
    }
    return tmp3;
  }
}
const Ident = _mod12657.TYPE.Ident;
const Number = _mod12657.TYPE.Number;
const Dimension = _mod12657.TYPE.Dimension;
let obj = {
  name: "UnicodeRange",
  structure: { value: String },
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    if (!obj.cmpChar(this.scanner.source, tokenStart, 117)) {
      self.error("U is expected");
    }
    obj = _mod12657;
    if (!tmpResult.cmpChar(self.scanner.source, tokenStart + 1, 43)) {
      self.error("Plus sign is expected");
    }
    self.scanner.next();
    const call = scanUnicodeRange.call;
    if (typeof call === "unknown") {
      scanUnicodeRange();
    } else {
      call(self);
    }
    const obj2 = { type: "UnicodeRange", loc: self.getLocation(tokenStart, self.scanner.tokenStart), value: null };
    const scanner = self.scanner;
    obj2.value = scanner.substrToCursor(tokenStart);
    return obj2;
  },
  generate(value) {
    this.chunk(value.value);
  }
};

export default obj;