// === Module 6630: ? ===

// Module 6630
import _mod6631 from "module_6631" /* 6631 */;
import DefinePropertyOrThrow from "DefinePropertyOrThrow" /* 6632 */;

const tmp = _mod6631("%Reflect.construct%", true);
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