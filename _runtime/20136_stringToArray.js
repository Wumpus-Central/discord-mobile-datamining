// === Module 20136: stringToArray ===

// Module 20136 (stringToArray)
import _mod20135 from "module_20135" /* 20135 */;
import unicodeToArray from "unicodeToArray" /* 20137 */;
import asciiToArray from "asciiToArray" /* 20138 */;


export default function stringToArray(arg0) {
  if (_mod20135(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};