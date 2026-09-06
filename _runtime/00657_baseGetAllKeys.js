// _runtime/00657_baseGetAllKeys.js
import _mod514 from "metro/00514__.js";
import arrayPush from "00658_arrayPush.js";

export default function baseGetAllKeys(arg0, fn, fn2) {
  const tmp = fn(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod514(arg0)) {
    tmp2ResultResult = arrayPush(tmp, fn2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
}
