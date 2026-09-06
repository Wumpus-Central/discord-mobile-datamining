// === Module 8118: SkemaUtils ===

// Module 8118 (SkemaUtils)
import _slicedToArray from "module_32" /* 32 */;

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
    let tmp6 = _slicedToArray(tmp4, 2);
    let first = tmp6[0];
    let tmp9 = tmp6[1];
    if (first !== _errors) {
      if (null != tmp9) {
        if (typeof tmp9 === "object") {
          let tmp13 = arg1;
          let tmp14 = getFirstSkemaFieldError;
          if (arg1 == null) {
            tmp13 = first;
          }
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/interactions/SkemaUtils.tsx");

export const getFirstSkemaError = function getFirstSkemaError(errors) {
  return getFirstSkemaFieldError(errors, undefined);
};