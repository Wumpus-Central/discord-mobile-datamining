// === Module 20258: stringToArray ===

// Module 20258 (stringToArray)
import _mod20257 from "module_20257" /* 20257 */;
import unicodeToArray from "unicodeToArray" /* 20259 */;
import asciiToArray from "asciiToArray" /* 20260 */;


export default function stringToArray(arg0) {
  if (_mod20257(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};