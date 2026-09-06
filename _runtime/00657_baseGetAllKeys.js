// === Module 657: baseGetAllKeys ===

// Module 657 (baseGetAllKeys)
import _mod514 from "module_514" /* 514 */;
import arrayPush from "arrayPush" /* 658 */;


export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod514(arg0)) {
    tmp2ResultResult = arrayPush(tmp, arg2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};