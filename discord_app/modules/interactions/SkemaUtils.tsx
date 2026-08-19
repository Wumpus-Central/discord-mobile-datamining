// === Module 8332: getFirstSkemaFieldError ===

// Module 8332 (getFirstSkemaFieldError)
import _slicedToArray from "_slicedToArray" /* 32 */;

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
    let tmp6 = callback(tmp4, 2);
    let first = tmp6[0];
    let tmp9 = tmp6[1];
    if (first !== _errors) {
      if (null != tmp9) {
        if (typeof tmp9 === "object") {
          let tmp13 = arg1;
          if (arg1 == null) {
            tmp13 = first;
          }
          let tmp14Result = getFirstSkemaFieldError(tmp9, tmp13);
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
const result = require("obj132").fileFinishedImporting("modules/interactions/SkemaUtils.tsx");

export const getFirstSkemaError = function getFirstSkemaError(errors) {
  return getFirstSkemaFieldError(errors, undefined);
};