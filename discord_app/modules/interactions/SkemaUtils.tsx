// discord_app/modules/interactions/SkemaUtils.tsx
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../_runtime/metro/00002__.js";

function getFirstSkemaFieldError(errors, arg1) {
  let first;
  let tmp9;
  if (null != errors[_errors]) {
    const _Array = Array;
    if (Array.isArray(errors[_errors])) {
      return errors[_errors][0];
    }
  }
  const entries = Object.entries(errors);
  const obj = entries[Symbol.iterator]();
  while (obj !== undefined) {
    [first, tmp9] = tmp4;
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
const result = size.fileFinishedImporting("modules/interactions/SkemaUtils.tsx");

export const getFirstSkemaError = function getFirstSkemaError(errors) {
  return getFirstSkemaFieldError(errors, undefined);
};
