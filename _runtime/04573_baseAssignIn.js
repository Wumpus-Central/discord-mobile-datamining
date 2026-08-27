// === Module 4573: baseAssignIn ===

// Module 4573 (baseAssignIn)
import copyObject from "copyObject" /* 4570 */;
import keysIn from "keysIn" /* 4574 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};