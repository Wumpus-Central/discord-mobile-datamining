// === Module 4986: baseAssign ===

// Module 4986 (baseAssign)
import _mod531 from "module_531" /* 531 */;
import copyObject from "copyObject" /* 4978 */;


export default function baseAssign(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = copyObject;
    tmp = tmp5(arg1, _mod531(arg1), arg0);
  }
  return tmp;
};