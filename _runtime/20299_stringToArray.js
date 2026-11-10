// === Module 20299: stringToArray ===

// Module 20299 (stringToArray)
import _mod20298 from "module_20298" /* 20298 */;
import unicodeToArray from "unicodeToArray" /* 20300 */;
import asciiToArray from "asciiToArray" /* 20301 */;


export default function stringToArray(arg0) {
  if (_mod20298(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};