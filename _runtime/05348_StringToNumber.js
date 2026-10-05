// === Module 5348: StringToNumber ===

// Module 5348 (StringToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import regexTester from "regexTester" /* 1453 */;
import trim from "trim" /* 5349 */;

const tmp = GetIntrinsic("%RegExp%");
const React2 = GetIntrinsic("%parseInt%");
const _false = callBoundIntrinsic("String.prototype.slice");
const React3 = regexTester(/^0b[01]+$/i);
const hasOwnProperty = regexTester(/^0o[0-7]+$/i);
const metroRequire = regexTester(/^[-+]0x[0-9a-f]+$/i);
const items = ["\u0085", "\u200B", "\uFFFE"];
const tmp2 = new tmp("[" + items.join("") + "]", "g");
const metroImportDefault = regexTester(tmp2);
class StringToNumber {
  constructor(str) {
    if (typeof str !== "string") {
      const self = this;
      const self2 = this;
      const tmp15 = new _mod1293("Assertion failed: `argument` is not a String");
      throw tmp15;
    } else if (closure_4(str)) {
      return +closure_2(closure_3(str, 2), 2);
    } else if (closure_5(str)) {
      return +closure_2(closure_3(str, 2), 8);
    } else {
      if (!closure_7(str)) {
        if (!closure_6(str)) {
          let tmp7;
          const tmp6 = trim(str);
          if (tmp6 !== str) {
            tmp7 = StringToNumber(tmp6);
          } else {
            tmp7 = +str;
          }
          return tmp7;
        }
      }
      return NaN;
    }
  }
}

export default StringToNumber;