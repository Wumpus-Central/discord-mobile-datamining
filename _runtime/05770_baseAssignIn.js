// === Module 5770: baseAssignIn ===

// Module 5770 (baseAssignIn)
import copyObject from "copyObject" /* 5767 */;
import keysIn from "keysIn" /* 5771 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};