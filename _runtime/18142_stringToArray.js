// === Module 18142: stringToArray ===

// Module 18142 (stringToArray)
import _mod18141 from "module_18141" /* 18141 */;
import unicodeToArray from "unicodeToArray" /* 18143 */;
import asciiToArray from "asciiToArray" /* 18144 */;


export default function stringToArray(arg0) {
  if (_mod18141(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};