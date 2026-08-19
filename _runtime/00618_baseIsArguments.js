// === Module 618: baseIsArguments ===

// Module 618 (baseIsArguments)
import isObjectLike from "isObjectLike" /* 620 */;
import baseIsArguments from "baseIsArguments" /* 619 */;

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
        const call2 = callback2.call;
        if (typeof call2 === "unknown") {
          let call2Result = callback2("callee");
        } else {
          call2Result = call2(arg0, "callee");
        }
      }
    } else {
      const call = callback.call;
      if (typeof call === "unknown") {
        let callResult = callback("callee");
      } else {
        callResult = call(arg0, "callee");
      }
    }
  };
}

export default fn;