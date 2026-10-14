// === Module 18535: stringToArray ===

// Module 18535 (stringToArray)
import _mod18534 from "module_18534" /* 18534 */;
import unicodeToArray from "unicodeToArray" /* 18536 */;
import asciiToArray from "asciiToArray" /* 18537 */;


export default function stringToArray(arg0) {
  if (_mod18534(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};