// === Module 19195: stringToArray ===

// Module 19195 (stringToArray)
import _mod19194 from "module_19194" /* 19194 */;
import unicodeToArray from "unicodeToArray" /* 19196 */;
import asciiToArray from "asciiToArray" /* 19197 */;


export default function stringToArray(arg0) {
  if (_mod19194(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};