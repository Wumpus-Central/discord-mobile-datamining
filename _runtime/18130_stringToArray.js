// === Module 18130: stringToArray ===

// Module 18130 (stringToArray)
import _mod18129 from "module_18129" /* 18129 */;
import unicodeToArray from "unicodeToArray" /* 18131 */;
import asciiToArray from "asciiToArray" /* 18132 */;


export default function stringToArray(arg0) {
  if (_mod18129(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};