// === Module 4841: baseAssignIn ===

// Module 4841 (baseAssignIn)
import copyObject from "copyObject" /* 4838 */;
import keysIn from "keysIn" /* 4842 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};