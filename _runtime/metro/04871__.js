// === Module 4871: ? ===

// Module 4871
import _mod4872 from "module_4872" /* 4872 */;
import DefinePropertyOrThrow from "DefinePropertyOrThrow" /* 4873 */;

const tmp = _mod4872("%Reflect.construct%", true);
let closure_0 = tmp;
try {
  let obj = {
    () => {

      }
  };
  DefinePropertyOrThrow({}, "", obj);
  let tmp4 = DefinePropertyOrThrow;
  if (tmp4) {
    if (tmp) {
      let closure_1 = {};
      obj = {};
      obj = {
        () => {
                throw closure_1;
              },
        "[[Enumerable]]": true
      };
      tmp4(obj, "length", obj);
      module.exports = function IsConstructor(arg0) {
        try {
          closure_0(arg0, obj);
        } catch (tmp5) {
          return tmp5 === closure_1;
        }
      };
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