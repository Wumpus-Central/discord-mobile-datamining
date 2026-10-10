// === Module 18437: stringToArray ===

// Module 18437 (stringToArray)
import _mod18436 from "module_18436" /* 18436 */;
import unicodeToArray from "unicodeToArray" /* 18438 */;
import asciiToArray from "asciiToArray" /* 18439 */;


export default function stringToArray(arg0) {
  if (_mod18436(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};