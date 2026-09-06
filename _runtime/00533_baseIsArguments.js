// === Module 533: baseIsArguments ===

// Module 533 (baseIsArguments)
import isObjectLike from "isObjectLike" /* 535 */;
import baseIsArguments from "baseIsArguments" /* 534 */;

({ hasOwnProperty: obj1, propertyIsEnumerable: c3 } = Object.prototype);
if (baseIsArguments((() => arguments)())) {
  let fn = baseIsArguments;
} else {
  fn = (arg0) => {
    const tmp = isObjectLike(arg0);
    if (!tmp) {
      if (!tmp) {
        return tmp;
      } else {
        const call2 = closure_3.call;
        if (typeof call2 === "unknown") {
          let call2Result = tmp5("callee");
        } else {
          call2Result = call2(arg0, "callee");
        }
        tmp5 = closure_3;
      }
    } else {
      const call = closure_2.call;
      if (typeof call === "unknown") {
        let callResult = tmp2("callee");
      } else {
        callResult = call(arg0, "callee");
      }
      tmp2 = closure_2;
    }
  };
}

export default fn;