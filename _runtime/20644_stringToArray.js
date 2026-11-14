// === Module 20644: stringToArray ===

// Module 20644 (stringToArray)
import _mod20643 from "module_20643" /* 20643 */;
import unicodeToArray from "unicodeToArray" /* 20645 */;
import asciiToArray from "asciiToArray" /* 20646 */;


export default function stringToArray(arg0) {
  if (_mod20643(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};