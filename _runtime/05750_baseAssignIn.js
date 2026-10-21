// === Module 5750: baseAssignIn ===

// Module 5750 (baseAssignIn)
import copyObject from "copyObject" /* 5747 */;
import keysIn from "keysIn" /* 5751 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};