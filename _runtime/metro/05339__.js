// === Module 5339: ? ===

// Module 5339
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import _mod1451 from "module_1451" /* 1451 */;

let closure_0 = callBoundIntrinsic("String.prototype.valueOf");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = _mod1451();

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