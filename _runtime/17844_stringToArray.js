// === Module 17844: stringToArray ===

// Module 17844 (stringToArray)
import _mod17843 from "module_17843" /* 17843 */;
import unicodeToArray from "unicodeToArray" /* 17845 */;
import asciiToArray from "asciiToArray" /* 17846 */;


export default function stringToArray(arg0) {
  if (_mod17843(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};