// === Module 19196: stringToArray ===

// Module 19196 (stringToArray)
import _mod19195 from "module_19195" /* 19195 */;
import unicodeToArray from "unicodeToArray" /* 19197 */;
import asciiToArray from "asciiToArray" /* 19198 */;


export default function stringToArray(arg0) {
  if (_mod19195(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};