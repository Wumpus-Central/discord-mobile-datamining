// === Module 4913: baseAssignIn ===

// Module 4913 (baseAssignIn)
import copyObject from "copyObject" /* 4910 */;
import keysIn from "keysIn" /* 4914 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};