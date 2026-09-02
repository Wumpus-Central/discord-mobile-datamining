// _runtime/00790_baseGetAllKeys.js
import _mod596 from "metro/00596__.js";
import arrayPush from "00791_arrayPush.js";

export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod596(arg0)) {
    tmp2ResultResult = arrayPush(tmp, arg2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
}
