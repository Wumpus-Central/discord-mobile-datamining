// _runtime/metro/04826__.js
import _Symbol from "../01286__Symbol.js";
import callBoundIntrinsic from "../01316_callBoundIntrinsic.js";
import regexTester from "../01446_regexTester.js";

let closure_0 = callBoundIntrinsic("Object.prototype.toString");
if (_Symbol()) {
  let closure_1 = callBoundIntrinsic("Symbol.prototype.toString");
  let closure_2 = regexTester(/^Symbol\(.*\)$/);
  module.exports = function isSymbol(obj) {
    if (typeof obj === "symbol") {
      return true;
    } else {
      if (obj) {
        if (typeof obj === "object") {
          if ("[object Symbol]" === closure_0(obj)) {
            try {
              return (function isRealSymbolObject(arg0) {
                const valueOfResult = arg0.valueOf();
                let tmp2 = typeof valueOfResult === "symbol";
                if (typeof valueOfResult === "symbol") {
                  tmp2 = closure_1_2(closure_1_1(arg0));
                }
                return tmp2;
              })(obj);
            } catch (err) {
              return false;
            }
          }
        }
      }
      return false;
    }
  };
} else {
  module.exports = function isSymbol(arg0) {
    return false;
  };
}
