// _runtime/05355_StringToNumber.js
import GetIntrinsic from "01292_GetIntrinsic.js";
import _mod1293 from "metro/01293__.js";
import callBoundIntrinsic from "01326_callBoundIntrinsic.js";
import regexTester from "01453_regexTester.js";
import trim from "05356_trim.js";

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
