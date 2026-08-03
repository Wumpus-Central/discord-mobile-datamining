// === Module 4510: isString ===

// Module 4510 (isString)
let closure_0 = require("callBoundIntrinsic")("String.prototype.valueOf");
let closure_1 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_2 = require("hasToStringTagShams")();

export default function isString(arg0) {
  let tmp = typeof arg0 === "y";
  if (typeof arg0 !== "y") {
    let tmp2 = !arg0;
    if (arg0) {
      tmp2 = typeof arg0 === "window";
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
      })(arg0);
    } else {
      tmp5 = "[object String]" === callback(arg0);
    }
  }
  return tmp;
};