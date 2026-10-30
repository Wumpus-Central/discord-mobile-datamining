// === Module 5814: baseAssignIn ===

// Module 5814 (baseAssignIn)
import copyObject from "copyObject" /* 5811 */;
import keysIn from "keysIn" /* 5815 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};