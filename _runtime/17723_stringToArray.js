// === Module 17723: stringToArray ===

// Module 17723 (stringToArray)
import _mod17722 from "module_17722" /* 17722 */;
import unicodeToArray from "unicodeToArray" /* 17724 */;
import asciiToArray from "asciiToArray" /* 17725 */;


export default function stringToArray(arg0) {
  if (_mod17722(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};