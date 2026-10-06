// === Module 5359: ToString ===

// Module 5359 (ToString)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;

let closure_2 = GetIntrinsic("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Cannot convert a Symbol value to a string");
    throw tmp3;
  } else {
    return closure_2(arg0);
  }
};