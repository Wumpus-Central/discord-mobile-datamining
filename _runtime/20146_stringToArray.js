// === Module 20146: stringToArray ===

// Module 20146 (stringToArray)
import _mod20145 from "module_20145" /* 20145 */;
import unicodeToArray from "unicodeToArray" /* 20147 */;
import asciiToArray from "asciiToArray" /* 20148 */;


export default function stringToArray(arg0) {
  if (_mod20145(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};