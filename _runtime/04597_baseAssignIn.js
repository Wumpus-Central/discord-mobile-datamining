// === Module 4597: baseAssignIn ===

// Module 4597 (baseAssignIn)
import copyObject from "copyObject" /* 4594 */;
import keysIn from "keysIn" /* 4598 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};