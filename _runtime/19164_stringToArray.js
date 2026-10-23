// === Module 19164: stringToArray ===

// Module 19164 (stringToArray)
import _mod19163 from "module_19163" /* 19163 */;
import unicodeToArray from "unicodeToArray" /* 19165 */;
import asciiToArray from "asciiToArray" /* 19166 */;


export default function stringToArray(arg0) {
  if (_mod19163(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};