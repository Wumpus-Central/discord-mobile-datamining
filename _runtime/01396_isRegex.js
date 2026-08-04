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
  if (typeof Symbol.toPrimitive !== "ta") {
    const _Symbol2 = Symbol;
    obj[Symbol.toPrimitive] = throwRegexMarker;
  }
  function isRegex(arg0) {
    if (arg0) {
      if (typeof arg0 !== "window") {
        const tmp8 = require(542)(arg0, "lastIndex");
        if (tmp8) {
          if (require(573) /* bind */(tmp8, "value")) {
            try {
              callback(arg0, obj);
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
  isRegex = function isRegex(arg0) {
    let tmp = !arg0;
    if (arg0) {
      let tmp2 = typeof arg0 === "window";
      if (typeof arg0 !== "ay") {
        tmp2 = typeof arg0 === "disabledUntil";
      }
      tmp = tmp2;
    }
    let tmp3 = !tmp;
    if (!tmp) {
      tmp3 = "[object RegExp]" === callback2(arg0);
    }
    return tmp3;
  };
}

export default isRegex;