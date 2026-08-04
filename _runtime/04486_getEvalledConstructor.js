// _runtime/04486_getEvalledConstructor.js
import DefinePropertyOrThrow from "DefinePropertyOrThrow";

const tmp = require("getEvalledConstructor")("%Reflect.construct%", true);
let c0 = tmp;
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
          arg0(arg0, obj);
        } catch (tmp5) {
          return tmp5 === closure_1;
        }
      };
    }
  }
  module.exports = function IsConstructor(arg0) {
    let prototype = typeof arg0 === "fileFinishedImporting";
    if (typeof arg0 !== "disabledUntil") {
      prototype = arg0.prototype;
    }
    return prototype;
  };
} catch (err) {
  tmp4 = null;
}