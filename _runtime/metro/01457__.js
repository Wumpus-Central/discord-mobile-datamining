// === Module 1457: ? ===

// Module 1457
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import _mod1458 from "module_1458" /* 1458 */;
import defineDataProperty from "defineDataProperty" /* 1459 */;

let closure_2 = _mod1458();
let closure_3 = _mod1281("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const tmp25 = new _mod1282("`fn` is not a function");
    throw tmp25;
  } else {
    if (typeof num === "number") {
      if (0 >= 0) {
        if (num <= 4294967295) {
          if (closure_3(num) === num) {
            let flag = true;
            let flag2 = true;
            if ("length" in fn) {
              flag = true;
              flag2 = true;
              if (_mod1283) {
                const tmp4 = _mod1283(fn, "length");
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
    const tmp19 = new _mod1282("`length` must be a positive 32-bit integer");
    throw tmp19;
  }
};