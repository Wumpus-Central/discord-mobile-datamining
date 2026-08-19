// _runtime/00618_baseIsArguments.js
import isObjectLike from "00620_isObjectLike.js";
import baseIsArguments from "00619_baseIsArguments.js";

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