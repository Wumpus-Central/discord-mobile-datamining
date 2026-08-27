// _runtime/04578_baseAssign.js
import keys from "00616_keys.js";
import copyObject from "04570_copyObject.js";


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keys(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};