// === Module 4649: baseAssign ===

// Module 4649 (baseAssign)
import keys from "keys" /* 531 */;
import copyObject from "copyObject" /* 4641 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keys(arg1), arg0);
    const tmp5 = copyObject;
  }
  return tmp;
};