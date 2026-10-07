// === Module 17914: stringToArray ===

// Module 17914 (stringToArray)
import _mod17913 from "module_17913" /* 17913 */;
import unicodeToArray from "unicodeToArray" /* 17915 */;
import asciiToArray from "asciiToArray" /* 17916 */;


export default function stringToArray(arg0) {
  if (_mod17913(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};