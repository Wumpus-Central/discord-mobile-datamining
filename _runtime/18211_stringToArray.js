// === Module 18211: stringToArray ===

// Module 18211 (stringToArray)
import _mod18210 from "module_18210" /* 18210 */;
import unicodeToArray from "unicodeToArray" /* 18212 */;
import asciiToArray from "asciiToArray" /* 18213 */;


export default function stringToArray(arg0) {
  if (_mod18210(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};