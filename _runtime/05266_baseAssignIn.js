// === Module 5266: baseAssignIn ===

// Module 5266 (baseAssignIn)
import copyObject from "copyObject" /* 5263 */;
import keysIn from "keysIn" /* 5267 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};