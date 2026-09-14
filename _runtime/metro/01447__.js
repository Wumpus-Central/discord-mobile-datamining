// _runtime/metro/01447__.js
import _mod1282 from "01282__.js";
import _mod1313 from "01313__.js";
import callBoundIntrinsic from "../01314_callBoundIntrinsic.js";

if (tmp) {
  let closure_2 = callBoundIntrinsic("RegExp.prototype.exec");
  let closure_3 = {};
  function throwRegexMarker() {
    throw closure_3;
  }
  const obj = { toString: throwRegexMarker, valueOf: throwRegexMarker };
  const _Symbol = Symbol;
  if (typeof Symbol.toPrimitive === "symbol") {
    const _Symbol2 = Symbol;
    obj[Symbol.toPrimitive] = throwRegexMarker;
  }
  function isRegex(obj) {
    if (obj) {
      if (typeof obj === "object") {
        const tmp8 = _mod1282(obj, "lastIndex");
        if (tmp8) {
          if (_mod1313(tmp8, "value")) {
            try {
              closure_2(obj, obj);
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
      tmp3 = "[object RegExp]" === closure_5(obj);
    }
    return tmp3;
  };
}

export default isRegex;
