// === Module 17868: stringToArray ===

// Module 17868 (stringToArray)
import _mod17867 from "module_17867" /* 17867 */;
import unicodeToArray from "unicodeToArray" /* 17869 */;
import asciiToArray from "asciiToArray" /* 17870 */;


export default function stringToArray(arg0) {
  if (_mod17867(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};