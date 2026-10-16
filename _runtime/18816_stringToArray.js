// === Module 18816: stringToArray ===

// Module 18816 (stringToArray)
import _mod18815 from "module_18815" /* 18815 */;
import unicodeToArray from "unicodeToArray" /* 18817 */;
import asciiToArray from "asciiToArray" /* 18818 */;


export default function stringToArray(arg0) {
  if (_mod18815(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};