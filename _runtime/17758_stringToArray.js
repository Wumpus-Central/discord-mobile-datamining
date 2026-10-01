// === Module 17758: stringToArray ===

// Module 17758 (stringToArray)
import _mod17757 from "module_17757" /* 17757 */;
import unicodeToArray from "unicodeToArray" /* 17759 */;
import asciiToArray from "asciiToArray" /* 17760 */;


export default function stringToArray(arg0) {
  if (_mod17757(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};