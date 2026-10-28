// === Module 19506: stringToArray ===

// Module 19506 (stringToArray)
import _mod19505 from "module_19505" /* 19505 */;
import unicodeToArray from "unicodeToArray" /* 19507 */;
import asciiToArray from "asciiToArray" /* 19508 */;


export default function stringToArray(arg0) {
  if (_mod19505(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};