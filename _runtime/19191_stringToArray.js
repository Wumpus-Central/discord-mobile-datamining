// === Module 19191: stringToArray ===

// Module 19191 (stringToArray)
import _mod19190 from "module_19190" /* 19190 */;
import unicodeToArray from "unicodeToArray" /* 19192 */;
import asciiToArray from "asciiToArray" /* 19193 */;


export default function stringToArray(arg0) {
  if (_mod19190(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};