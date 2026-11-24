// === Module 19967: stringToArray ===

// Module 19967 (stringToArray)
import _mod19966 from "module_19966" /* 19966 */;
import unicodeToArray from "unicodeToArray" /* 19968 */;
import asciiToArray from "asciiToArray" /* 19969 */;


export default function stringToArray(arg0) {
  if (_mod19966(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};