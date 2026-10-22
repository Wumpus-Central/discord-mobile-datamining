// === Module 5755: baseAssignIn ===

// Module 5755 (baseAssignIn)
import copyObject from "copyObject" /* 5752 */;
import keysIn from "keysIn" /* 5756 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};