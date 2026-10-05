// === Module 528: baseForOwn ===

// Module 528 (baseForOwn)
import createBaseFor from "createBaseFor" /* 529 */;
import _mod531 from "module_531" /* 531 */;


export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (tmp) {
    const tmp5 = createBaseFor;
    tmp = tmp5(arg0, arg1, _mod531);
  }
  return tmp;
};