// === Module 4772: isString ===

// Module 4772 (isString)
import callBoundIntrinsic from "callBoundIntrinsic" /* 574 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1408 */;

let closure_0 = callBoundIntrinsic("String.prototype.valueOf");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = hasToStringTagShams();

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
          callback(arg0);
          return true;
        } catch (err) {
          return false;
        }
      })(str);
    } else {
      tmp5 = "[object String]" === callback(str);
    }
  }
  return tmp;
};