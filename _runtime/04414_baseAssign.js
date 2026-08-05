import { keys } from "00616_keys.js";
import { copyObject } from "04406_copyObject.js";
// _runtime/04414_baseAssign.js

export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject /* copyObject */(arg1, keys /* keys */(arg1), arg0);
    const tmp5 = copyObject /* copyObject */;
  }
  return tmp;
};