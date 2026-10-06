// === Module 4981: baseAssignIn ===

// Module 4981 (baseAssignIn)
import copyObject from "copyObject" /* 4978 */;
import keysIn from "keysIn" /* 4982 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};