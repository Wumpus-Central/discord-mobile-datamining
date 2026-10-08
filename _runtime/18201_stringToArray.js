// === Module 18201: stringToArray ===

// Module 18201 (stringToArray)
import _mod18200 from "module_18200" /* 18200 */;
import unicodeToArray from "unicodeToArray" /* 18202 */;
import asciiToArray from "asciiToArray" /* 18203 */;


export default function stringToArray(arg0) {
  if (_mod18200(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};