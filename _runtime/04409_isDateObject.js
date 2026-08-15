// _runtime/04409_isDateObject.js
let closure_0 = require("callBoundIntrinsic")("Date.prototype.getDay");
let closure_1 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_2 = require("hasToStringTagShams")();

export default function isDateObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
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
    })(obj);
  } else {
    tmp4 = "[object Date]" === callback(obj);
  }
};