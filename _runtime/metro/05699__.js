// === Module 5699: ? ===

// Module 5699
import _mod5700 from "module_5700" /* 5700 */;
import DefinePropertyOrThrow from "DefinePropertyOrThrow" /* 5701 */;

const tmp = _mod5700("%Reflect.construct%", true);
let closure_0 = tmp;
try {
  const obj = {
    () => {

      }
  };
  DefinePropertyOrThrow({}, "", obj);
  let tmp4 = DefinePropertyOrThrow;
  if (tmp4) {
    if (tmp) {
      let closure_1 = {};
      const obj3 = {
        () => {
                throw closure_1;
              },
        "[[Enumerable]]": true
      };
      tmp4({}, "length", obj3);
      module.exports = function IsConstructor(arg0) {
        try {
          closure_0(arg0, obj2);
        } catch (tmp5) {
          return tmp5 === closure_1;
        }
      };
      const obj2 = {};
    }
  }
  module.exports = function IsConstructor(fn) {
    let prototype = typeof fn === "function";
    if (typeof fn === "function") {
      prototype = fn.prototype;
    }
    return prototype;
  };
} catch (err) {
  tmp4 = null;
}