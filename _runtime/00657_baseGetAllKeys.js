// === Module 657: baseGetAllKeys ===

// Module 657 (baseGetAllKeys)
import _mod514 from "module_514" /* 514 */;
import arrayPush from "arrayPush" /* 658 */;


export default function baseGetAllKeys(value, fn, fn2) {
  const tmp = fn(value);
  let tmp2ResultResult = tmp;
  if (!_mod514(value)) {
    tmp2ResultResult = arrayPush(tmp, fn2(value));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};