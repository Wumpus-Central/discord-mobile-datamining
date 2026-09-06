// _runtime/04828_StringToNumber.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";
import callBoundIntrinsic from "01316_callBoundIntrinsic.js";
import regexTester from "01446_regexTester.js";
import trim from "04829_trim.js";

let tmp = _mod1282("%RegExp%");
const React2 = _mod1282("%parseInt%");
const React3 = callBoundIntrinsic("String.prototype.slice");
const React4 = regexTester(/^0b[01]+$/i);
const hasOwnProperty = regexTester(/^0o[0-7]+$/i);
const timestampProducer = regexTester(/^[-+]0x[0-9a-f]+$/i);
const items = ["\u0085", "\u200B", "\uFFFE"];
tmp = new tmp("[" + items.join("") + "]", "g");
const React5 = regexTester(tmp);
class StringToNumber {
  constructor(arg0) {
    if (typeof global !== "string") {
      tmp13 = closure_0;
      tmp14 = closure_1;
      tmp15 = new.target;
      str = "Assertion failed: `argument` is not a String";
      tmp16 = new.target;
      tmp17 = new closure_0(closure_1[3])("Assertion failed: `argument` is not a String");
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
              tmp6 = closure_0(closure_1[4])(global);
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
