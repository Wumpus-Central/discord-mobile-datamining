import { arrayPush } from "00794_arrayPush.js";
import { 00599__ } from "metro/00599__.js";
// _runtime/00793_baseGetAllKeys.js

export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp2ResultResult = tmp;
  if (!00599__(arg0)) {
    tmp2ResultResult = arrayPush /* arrayPush */(tmp, arg2(arg0));
    const tmp2Result = arrayPush /* arrayPush */;
  }
  return tmp2ResultResult;
};