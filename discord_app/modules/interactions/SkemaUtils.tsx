// === Module 8444: getFirstSkemaFieldError ===

// Module 8444 (getFirstSkemaFieldError)
import closure_0 from "_slicedToArray" /* 32 */;

function getFirstSkemaFieldError(errors, arg1) {
  if (null != errors[_errors]) {
    const _Array = Array;
    if (Array.isArray(tmp)) {
      return tmp[0];
    }
  }
  const entries = Object.entries(errors);
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    let first = tmp6[0];
    let tmp8 = first;
    let tmp9 = tmp6[1];
    let tmp10 = _errors;
    if (first !== _errors) {
      let tmp11 = tmp9;
      if (null != tmp9) {
        let tmp12 = tmp9;
        if (typeof tmp9 === "object") {
          let tmp13 = arg1;
          let tmp14 = getFirstSkemaFieldError;
          if (arg1 == null) {
            tmp13 = first;
          }
          let num = 0;
          let tmp16 = obj;
          let tmp14Result = tmp14(tmp9, tmp13);
          obj.return();
          return tmp14Result;
        }
      }
    }
    continue;
  }
  return null;
}
const _errors = "_errors";
const result = require("set").fileFinishedImporting("modules/interactions/SkemaUtils.tsx");

export const getFirstSkemaError = function getFirstSkemaError(errors) {
  return getFirstSkemaFieldError(errors, undefined);
};