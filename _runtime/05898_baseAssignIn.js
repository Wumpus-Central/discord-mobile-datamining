// === Module 5898: baseAssignIn ===

// Module 5898 (baseAssignIn)
import copyObject from "copyObject" /* 5895 */;
import keysIn from "keysIn" /* 5899 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};