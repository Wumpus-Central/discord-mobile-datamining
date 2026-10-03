// === Module 4975: baseAssignIn ===

// Module 4975 (baseAssignIn)
import copyObject from "copyObject" /* 4972 */;
import keysIn from "keysIn" /* 4976 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};