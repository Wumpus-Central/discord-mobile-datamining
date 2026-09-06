// === Module 4644: baseAssignIn ===

// Module 4644 (baseAssignIn)
import copyObject from "copyObject" /* 4641 */;
import keysIn from "keysIn" /* 4645 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};