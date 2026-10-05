// _runtime/00520_isFunction.js
import isObject from "00521_isObject.js";
import baseGetTag from "00522_baseGetTag.js";

export default function isFunction(arg0) {
  if (isObject(arg0)) {
    const tmp3 = baseGetTag(arg0);
    return (
      "[object Function]" == tmp3 ||
      "[object GeneratorFunction]" == tmp3 ||
      "[object AsyncFunction]" == tmp3 ||
      "[object Proxy]" == tmp3
    );
  } else {
    return false;
  }
}
