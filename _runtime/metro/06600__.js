// === Module 6600: ? ===

// Module 6600
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import _mod1460 from "module_1460" /* 1460 */;

let closure_0 = callBoundIntrinsic("Date.prototype.getDay");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = _mod1460();

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
        closure_1_0(arg0);
        return true;
      } catch (err) {
        return false;
      }
    })(obj);
  } else {
    tmp4 = "[object Date]" === closure_1(obj);
  }
};