// === Module 533: baseIsArguments ===

// Module 533 (baseIsArguments)
import _mod535 from "module_535" /* 535 */;
import baseIsArguments from "module_534" /* 534 */;

({ hasOwnProperty: c2, propertyIsEnumerable: c3 } = Object.prototype);
if (baseIsArguments((() => arguments)())) {
  let fn = baseIsArguments;
} else {
  fn = (arg0) => {
    const tmp = _mod535(arg0);
    if (!tmp) {
      if (!tmp) {
        return tmp;
      } else {
        const call2 = React3.call;
        if (typeof call2 === "unknown") {
          let call2Result = tmp5("callee");
        } else {
          call2Result = call2(arg0, "callee");
        }
        tmp5 = React3;
      }
    } else {
      const call = React2.call;
      if (typeof call === "unknown") {
        let callResult = tmp2("callee");
      } else {
        callResult = call(arg0, "callee");
      }
      tmp2 = React2;
    }
  };
}

export default fn;