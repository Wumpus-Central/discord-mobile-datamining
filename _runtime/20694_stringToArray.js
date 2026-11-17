// === Module 20694: stringToArray ===

// Module 20694 (stringToArray)
import _mod20693 from "module_20693" /* 20693 */;
import unicodeToArray from "unicodeToArray" /* 20695 */;
import asciiToArray from "asciiToArray" /* 20696 */;


export default function stringToArray(arg0) {
  if (_mod20693(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};