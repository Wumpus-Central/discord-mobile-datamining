// === Module 793: baseGetAllKeys ===

// Module 793 (baseGetAllKeys)
import _mod599 from "module_599" /* 599 */;
import arrayPush from "arrayPush" /* 794 */;


export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod599(arg0)) {
    tmp2ResultResult = arrayPush(tmp, arg2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};