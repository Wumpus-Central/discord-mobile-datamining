// === Module 533: baseIsArguments ===

// Module 533 (baseIsArguments)
import isObjectLike from "isObjectLike" /* 535 */;
import baseIsArguments from "baseIsArguments" /* 534 */;

let c2;
let c3;
let fn;
({ hasOwnProperty: c2, propertyIsEnumerable: c3 } = Object.prototype);
if (baseIsArguments((function() {
  return arguments;
})())) {
  fn = baseIsArguments;
} else {
  fn = (arg0) => {
    const callResult = isObjectLike(arg0) && React2.call(arg0, "callee") && !_false.call(arg0, "callee");
    return callResult;
  };
}

export default fn;