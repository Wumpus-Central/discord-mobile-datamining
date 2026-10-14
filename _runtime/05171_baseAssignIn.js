// === Module 5171: baseAssignIn ===

// Module 5171 (baseAssignIn)
import copyObject from "copyObject" /* 5168 */;
import keysIn from "keysIn" /* 5172 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};