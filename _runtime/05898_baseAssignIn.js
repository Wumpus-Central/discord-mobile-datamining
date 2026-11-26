// _runtime/05898_baseAssignIn.js
import copyObject from "05895_copyObject.js";
import keysIn from "05899_keysIn.js";

export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
}
