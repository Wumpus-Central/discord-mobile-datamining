// _runtime/04539_isString.js
let closure_0 = require("callBoundIntrinsic")("String.prototype.valueOf");
let closure_1 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_2 = require("hasToStringTagShams")();

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