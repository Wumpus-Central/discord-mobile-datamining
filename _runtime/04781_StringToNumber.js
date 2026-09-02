// === Module 4781: StringToNumber ===

// Module 4781 (StringToNumber)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import _mod538 from "module_538" /* 538 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 571 */;
import regexTester from "regexTester" /* 1409 */;
import trim from "trim" /* 4782 */;

let tmp = getEvalledConstructor("%RegExp%");
let closure_2 = getEvalledConstructor("%parseInt%");
let closure_3 = callBoundIntrinsic("String.prototype.slice");
let closure_4 = regexTester(/^0b[01]+$/i);
let closure_5 = regexTester(/^0o[0-7]+$/i);
let closure_6 = regexTester(/^[-+]0x[0-9a-f]+$/i);
const items = ["\u0085", "\u200B", "\uFFFE"];
tmp = new tmp("[" + items.join("") + "]", "g");
let closure_7 = regexTester(tmp);
class StringToNumber {
  constructor(arg0) {
    if (typeof global !== "string") {
      tmp13 = closure_0;
      tmp14 = closure_1;
      tmp15 = new.target;
      str = "Assertion failed: `argument` is not a String";
      tmp16 = new.target;
      tmp17 = new require("module_538")("Assertion failed: `argument` is not a String");
      tmp18 = tmp17;
      throw tmp17;
    } else {
      tmp19 = closure_4;
      if (closure_4(global)) {
        tmp11 = closure_2;
        tmp12 = closure_3;
        num4 = 2;
        return +closure_2(closure_3(global, 2), 2);
      } else {
        tmp = closure_5;
        if (closure_5(global)) {
          tmp9 = closure_2;
          tmp10 = closure_3;
          num2 = 2;
          num3 = 8;
          return +closure_2(closure_3(global, 2), 8);
        } else {
          tmp2 = closure_7;
          if (!closure_7(global)) {
            tmp3 = closure_6;
            if (!closure_6(global)) {
              tmp4 = closure_0;
              tmp5 = closure_1;
              tmp6 = require("trim")(global);
              if (tmp6 !== global) {
                tmp8 = StringToNumber;
                tmp7 = StringToNumber(tmp6);
              } else {
                tmp7 = +global;
              }
              return tmp7;
            }
          }
          num = NaN;
          return NaN;
        }
      }
    }
  }
}

export default StringToNumber;