// === Module 5166: baseAssignIn ===

// Module 5166 (baseAssignIn)
import copyObject from "copyObject" /* 5163 */;
import keysIn from "keysIn" /* 5167 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};