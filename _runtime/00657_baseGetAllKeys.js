// _runtime/00657_baseGetAllKeys.js
import _mod514 from "metro/00514__.js";
import arrayPush from "00658_arrayPush.js";

export default function baseGetAllKeys(value, fn, fn2) {
  const tmp = fn(value);
  let tmp2ResultResult = tmp;
  if (!_mod514(value)) {
    tmp2ResultResult = arrayPush(tmp, fn2(value));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
}
