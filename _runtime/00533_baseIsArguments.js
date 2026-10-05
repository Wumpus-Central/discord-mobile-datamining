// _runtime/00533_baseIsArguments.js
import isObjectLike from "00535_isObjectLike.js";
import baseIsArguments from "00534_baseIsArguments.js";

let c2;
let c3;
let fn;
({ hasOwnProperty: c2, propertyIsEnumerable: c3 } = Object.prototype);
if (
  baseIsArguments(
    (function () {
      return arguments;
    })(),
  )
) {
  fn = baseIsArguments;
} else {
  fn = (arg0) => {
    const callResult = isObjectLike(arg0) && React2.call(arg0, "callee") && !_false.call(arg0, "callee");
    return callResult;
  };
}

export default fn;
