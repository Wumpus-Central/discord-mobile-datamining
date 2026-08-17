// _runtime/00793_baseGetAllKeys.js
import _mod599 from "metro/00599__.js";
import arrayPush from "00794_arrayPush.js";


export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp2ResultResult = tmp;
  if (!_mod599(arg0)) {
    tmp2ResultResult = arrayPush(tmp, arg2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};