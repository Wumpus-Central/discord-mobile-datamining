// === Module 5669: ? ===

// Module 5669
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import _mod1464 from "module_1464" /* 1464 */;

let closure_0 = callBoundIntrinsic("Date.prototype.getDay");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = _mod1464();

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