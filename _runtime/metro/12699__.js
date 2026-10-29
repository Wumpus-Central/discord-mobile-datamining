// === Module 12699: ? ===

// Module 12699
import _mod12657 from "module_12657" /* 12657 */;

function checkInteger(arg0, arg1) {
  const self = this;
  const sum = this.scanner.tokenStart + arg0;
  const source = this.scanner.source;
  const charCodeAtResult = source.charCodeAt(sum);
  let tmp3 = charCodeAtResult !== c7;
  if (tmp3) {
    tmp3 = charCodeAtResult !== c8;
  }
  let sum1 = sum;
  if (!tmp3) {
    if (arg1) {
      self.error("Number sign is not allowed");
    }
    sum1 = sum + 1;
  }
  if (sum1 < self.scanner.tokenEnd) {
    do {
      let obj = _mod12657;
      let source2 = self.scanner.source;
      if (!obj.isDigit(source2.charCodeAt(sum1))) {
        let errorResult1 = self.error("Integer is expected", sum1);
      }
      sum1 = sum1 + 1;
    } while (sum1 < self.scanner.tokenEnd);
  }
}
function checkTokenIsInteger(c10) {
  let sum1;
  const self = this;
  const call = checkInteger.call;
  if (typeof call === "unknown") {
    const tokenStart = self.scanner.tokenStart;
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(tokenStart);
    let tmp4 = charCodeAtResult !== c7;
    if (tmp4) {
      tmp4 = charCodeAtResult !== c8;
    }
    let sum = tokenStart;
    if (!tmp4) {
      if (c10) {
        self.error("Number sign is not allowed");
      }
      sum = tokenStart + 1;
    }
    if (sum < self.scanner.tokenEnd) {
      do {
        let obj = _mod12657;
        let source2 = self.scanner.source;
        if (!obj.isDigit(source2.charCodeAt(sum))) {
          let errorResult1 = self.error("Integer is expected", sum);
        }
        sum1 = sum + 1;
        sum = sum1;
      } while (sum1 < self.scanner.tokenEnd);
    }
  } else {
    const callResult = call(self, 0, c10);
  }
  return callResult;
}
function expectCharCode(arg0, c8) {
  const self = this;
  if (!obj.cmpChar(this.scanner.source, this.scanner.tokenStart + arg0, c8)) {
    let str = "N is expected";
    if (c9 !== c8) {
      str = "";
      if (c8 === c8) {
        str = "HyphenMinus is expected";
      }
    }
    self.error(str, self.scanner.tokenStart + arg0);
  }
  obj = _mod12657;
}
function consumeB() {
  let lookupTypeResult;
  let lookupTypeResult1;
  let sum;
  let sum1;
  const self = this;
  let tokenType = this.scanner.tokenType;
  let num = 0;
  if (tokenType === WhiteSpace) {
    do {
      let scanner = self.scanner;
      sum = num + 1;
      lookupTypeResult = scanner.lookupType(sum);
      num = sum;
    } while (lookupTypeResult === WhiteSpace);
    num = sum;
    let num2 = sum;
    tokenType = lookupTypeResult;
  } else {
    num = 0;
    num2 = 0;
  }
  let tmp6 = Number;
  let num4 = 0;
  let tmp7 = num2;
  if (tokenType !== Number) {
    const scanner7 = self.scanner;
    let tmp10 = c7;
    if (!scanner7.isDelim(c7, num2)) {
      const scanner2 = self.scanner;
      if (!scanner2.isDelim(c8, num2)) {
        return null;
      }
    }
    const scanner3 = self.scanner;
    if (!scanner3.isDelim(tmp10, num2)) {
      tmp10 = c8;
    }
    let tmp11 = num2;
    do {
      let scanner4 = self.scanner;
      sum1 = tmp11 + 1;
      lookupTypeResult1 = scanner4.lookupType(sum1);
      tmp11 = sum1;
    } while (lookupTypeResult1 === WhiteSpace);
    tmp11 = sum1;
    if (lookupTypeResult1 !== Comment) {
      tokenType = lookupTypeResult1;
      num4 = tmp10;
      tmp7 = sum1;
      tmp6 = Number;
      if (lookupTypeResult1 !== Number) {
        const scanner5 = self.scanner;
        scanner5.skip(sum1);
        const call = checkTokenIsInteger.call;
        if (typeof call === "unknown") {
          checkTokenIsInteger(c10);
          tokenType = lookupTypeResult1;
          num4 = tmp10;
          tmp7 = sum1;
          tmp6 = Number;
        } else {
          call(self, c10);
          tokenType = lookupTypeResult1;
          num4 = tmp10;
          tmp7 = sum1;
          tmp6 = Number;
        }
      }
    }
  }
  if (0 < tmp7) {
    const scanner6 = self.scanner;
    scanner6.skip(tmp7);
  }
  let tmp22 = 0 === num4;
  if (tmp22) {
    const source = self.scanner.source;
    const charCodeAtResult = source.charCodeAt(self.scanner.tokenStart);
    tmp22 = charCodeAtResult !== c7;
    tokenType = charCodeAtResult;
  }
  if (tmp22) {
    tmp22 = tokenType !== c8;
  }
  if (tmp22) {
    self.error("Number sign is expected");
  }
  const call2 = checkTokenIsInteger.call;
  if (typeof call2 === "unknown") {
    checkTokenIsInteger(tmp28);
  } else {
    call2(self, tmp28);
  }
  if (num4 === c8) {
    let text = `-${self.consume(tmp6)}`;
  } else {
    text = self.consume(tmp6);
  }
  return text;
}
const WhiteSpace = _mod12657.TYPE.WhiteSpace;
const Comment = _mod12657.TYPE.Comment;
const Ident = _mod12657.TYPE.Ident;
const Number = _mod12657.TYPE.Number;
const Dimension = _mod12657.TYPE.Dimension;
let c7 = 43;
let c8 = 45;
let c9 = 110;
let c10 = true;
let obj = {
  name: "AnPlusB",
  structure: null,
  parse() {
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    if (this.scanner.tokenType === Number) {
      let consume = checkTokenIsInteger;
      const call14 = checkTokenIsInteger.call;
      if (typeof call14 === "unknown") {
        consume(false);
      } else {
        call14(self, false);
      }
      consume = self.consume;
      consume(Number);
    } else {
      if (self.scanner.tokenType === Ident) {
        if (obj.cmpChar(self.scanner.source, self.scanner.tokenStart, c8)) {
          const call9 = expectCharCode.call;
          if (typeof call9 === "unknown") {
            if (!tmp2Result.cmpChar(self.scanner.source, self.scanner.tokenStart + 1, c9)) {
              // // eliminated: always false
              self.error("N is expected", self.scanner.tokenStart + 1);
            }
            tmp2Result = _mod12657;
          } else {
            call9(self, 1, c9);
          }
          const scanner8 = self.scanner;
          const tokenLength = scanner8.getTokenLength();
          if (2 === tokenLength) {
            self.scanner.next();
            const call13 = consumeB.call;
            let str = "-1";
            let text = typeof call13 === "unknown" ? consumeB() : call13(self);
            const iter10 = self.scanner;
          } else if (3 === tokenLength) {
            const call11 = expectCharCode.call;
            if (typeof call11 === "unknown") {
              if (!tmp2Result3.cmpChar(self.scanner.source, self.scanner.tokenStart + 2, c8)) {
                let str19 = "N is expected";
                if (c9 !== c8) {
                  str19 = "";
                  str19 = "HyphenMinus is expected";
                }
                self.error(str19, self.scanner.tokenStart + 2);
              }
              tmp2Result3 = _mod12657;
            } else {
              call11(self, 2, c8);
            }
            self.scanner.next();
            const scanner10 = self.scanner;
            scanner10.skipSC();
            const call12 = checkTokenIsInteger.call;
            if (typeof call12 === "unknown") {
              checkTokenIsInteger(c10);
            } else {
              call12(self, c10);
            }
            text = `-${self.consume(tmp)}`;
            str = "-1";
            const iter9 = self.scanner;
          } else {
            const call18 = expectCharCode.call;
            if (typeof call18 === "unknown") {
              if (!tmp2Result4.cmpChar(self.scanner.source, self.scanner.tokenStart + 2, c8)) {
                let str16 = "N is expected";
                if (c9 !== c8) {
                  str16 = "";
                  str16 = "HyphenMinus is expected";
                }
                self.error(str16, self.scanner.tokenStart + 2);
              }
              tmp2Result4 = _mod12657;
            } else {
              call18(self, 2, c8);
            }
            const call10 = checkInteger.call;
            if (typeof call10 === "unknown") {
              const sum = self.scanner.tokenStart + 3;
              const source7 = self.scanner.source;
              const charCodeAtResult = source7.charCodeAt(sum);
              let sum1 = sum;
              if (!tmp92) {
                if (c10) {
                  self.error("Number sign is not allowed");
                }
                sum1 = sum + 1;
              }
              if (sum1 < self.scanner.tokenEnd) {
                do {
                  let obj12 = _mod12657;
                  let source8 = self.scanner.source;
                  if (!obj12.isDigit(source8.charCodeAt(sum1))) {
                    let errorResult4 = self.error("Integer is expected", sum1);
                  }
                  sum1 = sum1 + 1;
                } while (sum1 < self.scanner.tokenEnd);
              }
              tmp92 = charCodeAtResult !== c7 && charCodeAtResult !== c8;
            } else {
              call10(self, 3, c10);
            }
            self.scanner.next();
            const scanner9 = self.scanner;
            text = scanner9.substrToCursor(tokenStart + 2);
            str = "-1";
            const iter8 = self.scanner;
          }
        }
        let tmp112 = null !== str;
        if (tmp112) {
          tmp112 = str.charCodeAt(0) === c7;
        }
        let substr = str;
        if (tmp112) {
          substr = str.substr(1);
        }
        let tmp115 = null !== text;
        if (tmp115) {
          tmp115 = text.charCodeAt(0) === c7;
        }
        let substr1 = text;
        if (tmp115) {
          substr1 = text.substr(1);
        }
        const obj10 = { type: "AnPlusB", loc: self.getLocation(tokenStart, self.scanner.tokenStart), a: substr, b: substr1 };
        return obj10;
      }
      if (self.scanner.tokenType !== Ident) {
        const scanner11 = self.scanner;
        if (scanner11.isDelim(c7)) {
          const scanner = self.scanner;
        }
        if (self.scanner.tokenType === Dimension) {
          const source = self.scanner.source;
          const charCodeAtResult1 = source.charCodeAt(self.scanner.tokenStart);
          let tmp9 = charCodeAtResult1 === c7;
          if (!tmp9) {
            tmp9 = charCodeAtResult1 === c8;
          }
          const sum2 = self.scanner.tokenStart + tmp9;
          let tmp12 = sum2;
          if (sum2 < self.scanner.tokenEnd) {
            const source9 = self.scanner.source;
            let tmp16 = sum2;
            tmp12 = sum2;
            if (obj15.isDigit(source9.charCodeAt(sum2))) {
              const sum3 = tmp16 + 1;
              tmp12 = sum3;
              while (sum3 < self.scanner.tokenEnd) {
                let obj2 = _mod12657;
                let source2 = self.scanner.source;
                tmp16 = sum3;
                tmp12 = sum3;
                if (!obj2.isDigit(source2.charCodeAt(sum3))) {
                  break;
                }
              }
            }
            obj15 = _mod12657;
          }
          if (tmp12 === self.scanner.tokenStart + tmp9) {
            self.error("Integer is expected", self.scanner.tokenStart + tmp9);
          }
          const call = expectCharCode.call;
          const diff = tmp12 - self.scanner.tokenStart;
          if (typeof call === "unknown") {
            if (!obj3.cmpChar(self.scanner.source, self.scanner.tokenStart + diff, c9)) {
              // // eliminated: always false
              self.error("N is expected", self.scanner.tokenStart + diff);
            }
            obj3 = _mod12657;
          } else {
            call(self, diff, c9);
          }
          const substr2 = self.scanner.source.substring(tokenStart, tmp12);
          const sum4 = tmp12 + 1;
          if (sum4 === self.scanner.tokenEnd) {
            self.scanner.next();
            const call3 = consumeB.call;
            text = typeof call3 === "unknown" ? consumeB() : call3(self);
            str = substr2;
            const iter3 = self.scanner;
          } else {
            const call15 = expectCharCode.call;
            const sum5 = tmp12 - self.scanner.tokenStart + 1;
            if (typeof call15 === "unknown") {
              if (!obj4.cmpChar(self.scanner.source, self.scanner.tokenStart + sum5, c8)) {
                let str5 = "N is expected";
                if (c9 !== c8) {
                  str5 = "";
                  str5 = "HyphenMinus is expected";
                }
                self.error(str5, self.scanner.tokenStart + sum5);
              }
              obj4 = _mod12657;
            } else {
              call15(self, sum5, c8);
            }
            if (tmp12 + 2 === self.scanner.tokenEnd) {
              self.scanner.next();
              const scanner3 = self.scanner;
              scanner3.skipSC();
              const call2 = checkTokenIsInteger.call;
              if (typeof call2 === "unknown") {
                checkTokenIsInteger(c10);
              } else {
                call2(self, c10);
              }
              text = `-${self.consume(Number)}`;
              str = substr2;
              const iter2 = self.scanner;
            } else {
              const call16 = checkInteger.call;
              const sum6 = tmp12 - self.scanner.tokenStart + 2;
              if (typeof call16 === "unknown") {
                const sum7 = self.scanner.tokenStart + sum6;
                const source3 = self.scanner.source;
                const charCodeAtResult2 = source3.charCodeAt(sum7);
                let sum8 = sum7;
                if (!tmp32) {
                  if (c10) {
                    self.error("Number sign is not allowed");
                  }
                  sum8 = sum7 + 1;
                }
                if (sum8 < self.scanner.tokenEnd) {
                  do {
                    let obj5 = _mod12657;
                    let source4 = self.scanner.source;
                    if (!obj5.isDigit(source4.charCodeAt(sum8))) {
                      let errorResult9 = self.error("Integer is expected", sum8);
                    }
                    sum8 = sum8 + 1;
                  } while (sum8 < self.scanner.tokenEnd);
                }
                tmp32 = charCodeAtResult2 !== c7 && charCodeAtResult2 !== c8;
              } else {
                call16(self, sum6, c10);
              }
              self.scanner.next();
              const scanner2 = self.scanner;
              text = scanner2.substrToCursor(sum4);
              str = substr2;
              const iter = self.scanner;
            }
          }
        } else {
          self.error();
          text = null;
          str = null;
        }
      }
      const scanner4 = self.scanner;
      let num5 = 0;
      if (scanner4.isDelim(c7)) {
        self.scanner.next();
        num5 = 1;
        const iter4 = self.scanner;
      }
      const call4 = expectCharCode.call;
      if (typeof call4 === "unknown") {
        if (!obj6.cmpChar(self.scanner.source, self.scanner.tokenStart, c9)) {
          // // eliminated: always false
          self.error("N is expected", self.scanner.tokenStart);
        }
        obj6 = _mod12657;
      } else {
        call4(self, 0, c9);
      }
      const scanner5 = self.scanner;
      const tokenLength1 = scanner5.getTokenLength();
      if (1 === tokenLength1) {
        self.scanner.next();
        const call8 = consumeB.call;
        str = "1";
        text = typeof call8 === "unknown" ? consumeB() : call8(self);
        const iter7 = self.scanner;
      } else if (2 === tokenLength1) {
        const call6 = expectCharCode.call;
        if (typeof call6 === "unknown") {
          if (!obj9.cmpChar(self.scanner.source, self.scanner.tokenStart + 1, c8)) {
            let str13 = "N is expected";
            if (c9 !== c8) {
              str13 = "";
              str13 = "HyphenMinus is expected";
            }
            self.error(str13, self.scanner.tokenStart + 1);
          }
          obj9 = _mod12657;
        } else {
          call6(self, 1, c8);
        }
        self.scanner.next();
        const scanner7 = self.scanner;
        scanner7.skipSC();
        const call7 = checkTokenIsInteger.call;
        if (typeof call7 === "unknown") {
          checkTokenIsInteger(c10);
        } else {
          call7(self, c10);
        }
        text = `-${self.consume(tmp)}`;
        str = "1";
        const iter6 = self.scanner;
      } else {
        const call17 = expectCharCode.call;
        if (typeof call17 === "unknown") {
          if (!obj7.cmpChar(self.scanner.source, self.scanner.tokenStart + 1, c8)) {
            let str10 = "N is expected";
            if (c9 !== c8) {
              str10 = "";
              str10 = "HyphenMinus is expected";
            }
            self.error(str10, self.scanner.tokenStart + 1);
          }
          obj7 = _mod12657;
        } else {
          call17(self, 1, c8);
        }
        const call5 = checkInteger.call;
        if (typeof call5 === "unknown") {
          const sum9 = self.scanner.tokenStart + 2;
          const source5 = self.scanner.source;
          const charCodeAtResult3 = source5.charCodeAt(sum9);
          let sum10 = sum9;
          if (!tmp63) {
            if (c10) {
              self.error("Number sign is not allowed");
            }
            sum10 = sum9 + 1;
          }
          if (sum10 < self.scanner.tokenEnd) {
            do {
              let obj8 = _mod12657;
              let source6 = self.scanner.source;
              if (!obj8.isDigit(source6.charCodeAt(sum10))) {
                let errorResult15 = self.error("Integer is expected", sum10);
              }
              sum10 = sum10 + 1;
            } while (sum10 < self.scanner.tokenEnd);
          }
          tmp63 = charCodeAtResult3 !== c7 && charCodeAtResult3 !== c8;
        } else {
          call5(self, 2, c10);
        }
        self.scanner.next();
        const scanner6 = self.scanner;
        text = scanner6.substrToCursor(tokenStart + num5 + 1);
        str = "1";
        const iter5 = self.scanner;
      }
    }
  },
  generate(arg0) {
    let tmp = null !== arg0.a;
    if (tmp) {
      tmp = undefined !== arg0.a;
    }
    let tmp2 = null !== arg0.b;
    if (tmp2) {
      tmp2 = undefined !== arg0.b;
    }
    const self = this;
    const chunk = this.chunk;
    if (tmp) {
      let str = "+n";
      if ("+1" !== arg0.a) {
        let str5 = "n";
        if ("1" !== arg0.a) {
          let str6 = "-n";
          if ("-1" !== arg0.a) {
            str6 = `${arg0.a}n`;
          }
          str5 = str6;
        }
        str = str5;
      }
      chunk(str);
      if (tmp2) {
        const _String2 = String;
        const str8 = String(arg0.b);
        if ("-" !== str8.charAt(0)) {
          if ("+" !== str8.charAt(0)) {
            self.chunk("+");
            self.chunk(str8);
          }
        }
        self.chunk(str8.charAt(0));
        self.chunk(str8.substr(1));
      }
    } else {
      const _String = String;
      chunk(String(arg0.b));
    }
  }
};
let obj2 = { a: null, b: null };
const items = [String, null];
obj2.a = items;
const items1 = [String, null];
obj2.b = items1;
obj.structure = obj2;

export default obj;