// === Module 528: baseForOwn ===

// Module 528 (baseForOwn)
import createBaseFor from "createBaseFor" /* 529 */;
import keys from "keys" /* 531 */;


export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = createBaseFor(arg0, arg1, keys);
    const tmp5 = createBaseFor;
  }
  return tmp;
};