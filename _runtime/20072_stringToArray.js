// === Module 20072: stringToArray ===

// Module 20072 (stringToArray)
import _mod20071 from "module_20071" /* 20071 */;
import unicodeToArray from "unicodeToArray" /* 20073 */;
import asciiToArray from "asciiToArray" /* 20074 */;


export default function stringToArray(arg0) {
  if (_mod20071(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};