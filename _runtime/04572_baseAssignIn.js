// _runtime/04572_baseAssignIn.js
import copyObject from "04569_copyObject.js";
import keysIn from "04573_keysIn.js";


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};