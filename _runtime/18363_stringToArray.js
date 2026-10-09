// === Module 18363: stringToArray ===

// Module 18363 (stringToArray)
import _mod18362 from "module_18362" /* 18362 */;
import unicodeToArray from "unicodeToArray" /* 18364 */;
import asciiToArray from "asciiToArray" /* 18365 */;


export default function stringToArray(arg0) {
  if (_mod18362(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};