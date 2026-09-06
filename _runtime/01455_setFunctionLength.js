// === Module 1455: setFunctionLength ===

// Module 1455 (setFunctionLength)
import getEvalledConstructor from "getEvalledConstructor" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod1284 from "module_1284" /* 1284 */;
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1456 */;
import defineDataProperty from "defineDataProperty" /* 1457 */;

let closure_2 = hasPropertyDescriptors();
let closure_3 = getEvalledConstructor("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const tmp25 = new _mod1283("`fn` is not a function");
    throw tmp25;
  } else {
    if (typeof num === "number") {
      if (num >= 0) {
        if (num <= 4294967295) {
          if (callback(num) === num) {
            let flag = true;
            let flag2 = true;
            if ("length" in fn) {
              flag = true;
              flag2 = true;
              if (_mod1284) {
                const tmp4 = tmp2(1284)(fn, "length");
                let tmp5 = tmp4;
                if (tmp4) {
                  tmp5 = !tmp4.configurable;
                }
                let flag3 = true;
                if (tmp5) {
                  flag3 = false;
                }
                let tmp6 = tmp4;
                if (tmp4) {
                  tmp6 = !tmp4.writable;
                }
                flag = true;
                flag2 = flag3;
                if (tmp6) {
                  flag = false;
                  flag2 = flag3;
                }
              }
              tmp2 = require;
            }
            if (!flag2) {
              flag2 = flag;
            }
            if (!flag2) {
              flag2 = !tmp;
            }
            if (flag2) {
              const tmp10 = defineDataProperty;
              if (closure_2) {
                tmp10(fn, "length", num, true, true);
              } else {
                tmp10(fn, "length", num);
              }
            }
            return fn;
          }
        }
      }
    }
    const tmp19 = new _mod1283("`length` must be a positive 32-bit integer");
    throw tmp19;
  }
};