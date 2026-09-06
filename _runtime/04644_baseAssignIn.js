// _runtime/04644_baseAssignIn.js
import copyObject from "04641_copyObject.js";
import keysIn from "04645_keysIn.js";

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
}
