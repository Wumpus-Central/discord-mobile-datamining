// _runtime/00533_baseIsArguments.js
import _mod535 from "metro/00535__.js";
import baseIsArguments from "metro/00534__.js";

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
          let call2Result = React3("callee");
        } else {
          call2Result = call2(arg0, "callee");
        }
      }
    } else {
      const call = React2.call;
      if (typeof call === "unknown") {
        let callResult = React2("callee");
      } else {
        callResult = call(arg0, "callee");
      }
    }
  };
}

export default fn;
