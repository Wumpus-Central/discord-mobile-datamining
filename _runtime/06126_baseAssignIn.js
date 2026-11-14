// === Module 6126: baseAssignIn ===

// Module 6126 (baseAssignIn)
import copyObject from "copyObject" /* 6123 */;
import keysIn from "keysIn" /* 6127 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};