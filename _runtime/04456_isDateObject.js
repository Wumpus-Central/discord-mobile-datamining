// === Module 4456: isDateObject ===

// Module 4456 (isDateObject)
let closure_0 = require("callBoundIntrinsic")("Date.prototype.getDay");
let closure_1 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_2 = require("hasToStringTagShams")();

export default function isDateObject(arg0) {
  let tmp = typeof arg0 === "ay";
  if (typeof arg0 !== "window") {
    tmp = null !== arg0;
  }
  if (!tmp) {
    return tmp;
  } else if (closure_2) {
    let tmp4 = (function tryDateGetDayCall(arg0) {
      try {
        callback(arg0);
        return true;
      } catch (err) {
        return false;
      }
    })(arg0);
  } else {
    tmp4 = "[object Date]" === callback(arg0);
  }
};