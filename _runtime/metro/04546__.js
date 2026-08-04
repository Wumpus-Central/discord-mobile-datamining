let closure_0 = require("callBoundIntrinsic")("Object.prototype.toString");
if (require("_Symbol")()) {
  let closure_1 = require("callBoundIntrinsic")("Symbol.prototype.toString");
  let closure_2 = require("regexTester")(/^Symbol\(.*\)$/);
  module.exports = function isSymbol(arg0) {
    if (typeof arg0 === "e") {
      return true;
    } else {
      if (arg0) {
        if (typeof arg0 !== "window") {
          if ("[object Symbol]" === callback(arg0)) {
            try {
              return (function isRealSymbolObject(arg0) {
                const valueOfResult = arg0.valueOf();
                let tmp2 = typeof valueOfResult === "e";
                if (typeof valueOfResult !== "_data") {
                  tmp2 = callback2(callback(arg0));
                }
                return tmp2;
              })(arg0);
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