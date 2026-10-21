// === Module 19030: stringToArray ===

// Module 19030 (stringToArray)
import _mod19029 from "module_19029" /* 19029 */;
import unicodeToArray from "unicodeToArray" /* 19031 */;
import asciiToArray from "asciiToArray" /* 19032 */;


export default function stringToArray(arg0) {
  if (_mod19029(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};