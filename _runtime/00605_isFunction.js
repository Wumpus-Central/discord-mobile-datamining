// _runtime/00605_isFunction.js
import isObject from "00606_isObject.js";
import toStringTag from "00607_toStringTag.js";


export default function isFunction(arg0) {
  if (isObject(arg0)) {
    const tmp3 = toStringTag(arg0);
    let tmp4 = "[object Function]" == tmp3;
    if (!tmp4) {
      tmp4 = "[object GeneratorFunction]" == tmp3;
    }
    if (!tmp4) {
      tmp4 = "[object AsyncFunction]" == tmp3;
    }
    if (!tmp4) {
      tmp4 = "[object Proxy]" == tmp3;
    }
    return tmp4;
  } else {
    return false;
  }
  const tmp = require;
};