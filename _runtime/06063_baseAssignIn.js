// === Module 6063: baseAssignIn ===

// Module 6063 (baseAssignIn)
import copyObject from "copyObject" /* 6060 */;
import keysIn from "keysIn" /* 6064 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};