// _runtime/04840_baseAssignIn.js
import copyObject from "04837_copyObject.js";
import keysIn from "04841_keysIn.js";

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
}
