// === Module 4826: ? ===

// Module 4826
import _Symbol from "_Symbol" /* 1286 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import regexTester from "regexTester" /* 1446 */;

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