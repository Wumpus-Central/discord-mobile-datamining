// _runtime/04443_getEvalledConstructor.js
import getEvalledConstructor from "04444_getEvalledConstructor.js";
import DefinePropertyOrThrow from "04445_DefinePropertyOrThrow.js";

const tmp = getEvalledConstructor("%Reflect.construct%", true);
let closure_0 = tmp;
try {
  let obj = { "[[Get]]": null };
  obj[0] = () => {

  };
  DefinePropertyOrThrow({}, "", obj);
  let tmp4 = DefinePropertyOrThrow;
  if (tmp4) {
    if (tmp) {
      let closure_1 = {};
      obj = {};
      obj = { "[[Get]]": null, "[[Enumerable]]": true };
      obj[0] = () => {
        throw closure_1;
      };
      tmp4(obj, "length", obj);
      module.exports = function IsConstructor(arg0) {
        try {
          callback(arg0, obj);
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