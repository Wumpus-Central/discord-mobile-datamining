// === Module 19859: stringToArray ===

// Module 19859 (stringToArray)
import _mod19858 from "module_19858" /* 19858 */;
import unicodeToArray from "unicodeToArray" /* 19860 */;
import asciiToArray from "asciiToArray" /* 19861 */;


export default function stringToArray(arg0) {
  if (_mod19858(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};