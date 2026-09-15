// _runtime/04723_baseAssignIn.js
import copyObject from "04720_copyObject.js";
import keysIn from "04724_keysIn.js";

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
}
