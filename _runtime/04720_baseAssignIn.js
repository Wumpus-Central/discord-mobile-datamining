// === Module 4720: baseAssignIn ===

// Module 4720 (baseAssignIn)
import copyObject from "copyObject" /* 4717 */;
import keysIn from "keysIn" /* 4721 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};