// === Module 6466: ? ===

// Module 6466
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import _mod1459 from "module_1459" /* 1459 */;

let closure_0 = callBoundIntrinsic("String.prototype.valueOf");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = _mod1459();

export default function isString(str) {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    let tmp2 = !str;
    if (str) {
      tmp2 = typeof str !== "object";
    }
    if (tmp2) {
      tmp = !tmp2;
    } else if (closure_2) {
      let tmp5 = (function tryStringObject(arg0) {
        try {
          closure_1_0(arg0);
          return true;
        } catch (err) {
          return false;
        }
      })(str);
    } else {
      tmp5 = "[object String]" === closure_1(str);
    }
  }
  return tmp;
};