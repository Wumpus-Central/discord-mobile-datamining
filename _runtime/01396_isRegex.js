import { bind } from "00573_bind.js";
import { 00542__ } from "metro/00542__.js";
// _runtime/01396_isRegex.js
import callBoundIntrinsic from "callBoundIntrinsic";

if (tmp) {
  let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");
  let closure_3 = {};
  function throwRegexMarker() {
    throw closure_3;
  }
  const obj = { toString: null, valueOf: null };
  obj[0] = throwRegexMarker;
  obj[1] = throwRegexMarker;
  const _Symbol = Symbol;
  if (typeof Symbol.toPrimitive === "symbol") {
    const _Symbol2 = Symbol;
    obj[Symbol.toPrimitive] = throwRegexMarker;
  }
  function isRegex(obj) {
    if (obj) {
      if (typeof obj === "object") {
        const tmp8 = 00542__(obj, "lastIndex");
        if (tmp8) {
          if (bind /* bind */(tmp8, "value")) {
            try {
              callback(obj, obj);
            } catch (tmp4) {
              return tmp4 === closure_3;
            }
          }
        }
        return false;
      }
    }
    return false;
  }
} else {
  let closure_5 = callBoundIntrinsic("Object.prototype.toString");
  isRegex = function isRegex(obj) {
    let tmp = !obj;
    if (obj) {
      let tmp2 = typeof obj !== "object";
      if (typeof obj !== "object") {
        tmp2 = typeof obj !== "function";
      }
      tmp = tmp2;
    }
    let tmp3 = !tmp;
    if (!tmp) {
      tmp3 = "[object RegExp]" === callback2(obj);
    }
    return tmp3;
  };
}

export default isRegex;