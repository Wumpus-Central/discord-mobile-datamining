// === Module 18119: stringToArray ===

// Module 18119 (stringToArray)
import _mod18118 from "module_18118" /* 18118 */;
import unicodeToArray from "unicodeToArray" /* 18120 */;
import asciiToArray from "asciiToArray" /* 18121 */;


export default function stringToArray(arg0) {
  if (_mod18118(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};