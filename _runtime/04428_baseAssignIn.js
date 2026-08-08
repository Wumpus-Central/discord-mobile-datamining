// _runtime/04428_baseAssignIn.js
import { copyObject } from "04425_copyObject.js";
import { keysIn } from "04429_keysIn.js";

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};