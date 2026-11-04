// === Module 20132: stringToArray ===

// Module 20132 (stringToArray)
import _mod20131 from "module_20131" /* 20131 */;
import unicodeToArray from "unicodeToArray" /* 20133 */;
import asciiToArray from "asciiToArray" /* 20134 */;


export default function stringToArray(arg0) {
  if (_mod20131(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};