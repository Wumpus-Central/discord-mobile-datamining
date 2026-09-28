// === Module 17499: stringToArray ===

// Module 17499 (stringToArray)
import _mod17498 from "module_17498" /* 17498 */;
import unicodeToArray from "unicodeToArray" /* 17500 */;
import asciiToArray from "asciiToArray" /* 17501 */;


export default function stringToArray(arg0) {
  if (_mod17498(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};