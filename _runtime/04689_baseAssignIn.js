// === Module 4689: baseAssignIn ===

// Module 4689 (baseAssignIn)
import copyObject from "copyObject" /* 4686 */;
import keysIn from "keysIn" /* 4690 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};