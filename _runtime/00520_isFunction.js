// === Module 520: isFunction ===

// Module 520 (isFunction)
import isObject from "isObject" /* 521 */;
import baseGetTag from "baseGetTag" /* 522 */;


export default function isFunction(arg0) {
  if (isObject(arg0)) {
    const tmp3 = baseGetTag(arg0);
    return "[object Function]" == tmp3 || "[object GeneratorFunction]" == tmp3 || "[object AsyncFunction]" == tmp3 || "[object Proxy]" == tmp3;
  } else {
    return false;
  }
};