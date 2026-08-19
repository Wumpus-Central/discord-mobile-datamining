// _runtime/00793_baseGetAllKeys.js
import _mod599 from "metro/00599__.js";
import arrayPush from "00794_arrayPush.js";


export default function baseGetAllKeys(closure_0, fn, fn2) {
  const tmp = fn(closure_0);
  let tmp2ResultResult = tmp;
  if (!_mod599(closure_0)) {
    tmp2ResultResult = arrayPush(tmp, fn2(closure_0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};