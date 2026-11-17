// === Module 6123: baseAssignIn ===

// Module 6123 (baseAssignIn)
import copyObject from "copyObject" /* 6120 */;
import keysIn from "keysIn" /* 6124 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};