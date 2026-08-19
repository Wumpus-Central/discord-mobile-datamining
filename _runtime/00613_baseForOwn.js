// === Module 613: baseForOwn ===

// Module 613 (baseForOwn)
import createBaseFor from "createBaseFor" /* 614 */;
import keys from "keys" /* 616 */;


export default function baseForOwn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = createBaseFor(arg0, arg1, keys);
  }
  return tmp;
};