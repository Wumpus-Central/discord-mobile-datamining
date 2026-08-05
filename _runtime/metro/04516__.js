// _runtime/metro/04516__.js
let closure_0 = require("callBoundIntrinsic")("Object.prototype.toString");
if (require("_Symbol")()) {
  let closure_1 = require("callBoundIntrinsic")("Symbol.prototype.toString");
  let closure_2 = require("regexTester")(/^Symbol\(.*\)$/);
  module.exports = function isSymbol(obj) {
    if (typeof obj === "symbol") {
      return true;
    } else {
      if (obj) {
        if (typeof obj === "object") {
          if ("[object Symbol]" === callback(obj)) {
            try {
              return (function isRealSymbolObject(arg0) {
                const valueOfResult = arg0.valueOf();
                let tmp2 = typeof valueOfResult === "symbol";
                if (typeof valueOfResult === "symbol") {
                  tmp2 = callback2(callback(arg0));
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