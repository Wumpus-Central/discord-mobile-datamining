// === Module 17495: stringToArray ===

// Module 17495 (stringToArray)
import _mod17494 from "module_17494" /* 17494 */;
import unicodeToArray from "unicodeToArray" /* 17496 */;
import asciiToArray from "asciiToArray" /* 17497 */;


export default function stringToArray(arg0) {
  if (_mod17494(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};