// === Module 668: baseGetAllKeys ===

// Module 668 (baseGetAllKeys)
import _mod514 from "module_514" /* 514 */;
import arrayPush from "arrayPush" /* 669 */;


export default function baseGetAllKeys(arg0, fn, fn2) {
  const tmp = fn(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod514(arg0)) {
    const tmp2Result = arrayPush;
    tmp2ResultResult = tmp2Result(tmp, fn2(arg0));
  }
  return tmp2ResultResult;
};