// _runtime/00793_baseGetAllKeys.js
import { arrayPush } from "00794_arrayPush.js";
import { 00599__ } from "metro/00599__.js";

export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp2ResultResult = tmp;
  if (!00599__(arg0)) {
    tmp2ResultResult = arrayPush(tmp, arg2(arg0));
    const tmp2Result = arrayPush;
  }
  return tmp2ResultResult;
};