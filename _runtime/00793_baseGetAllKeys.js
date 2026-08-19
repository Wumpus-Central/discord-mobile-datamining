// === Module 793: baseGetAllKeys ===

// Module 793 (baseGetAllKeys)
import _mod599 from "module_599" /* 599 */;
import arrayPush from "arrayPush" /* 794 */;


export default function baseGetAllKeys(closure_0, fn, fn2) {
  const tmp = fn(closure_0);
  let tmp2ResultResult = tmp;
  if (!_mod599(closure_0)) {
    tmp2ResultResult = arrayPush(tmp, fn2(closure_0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};