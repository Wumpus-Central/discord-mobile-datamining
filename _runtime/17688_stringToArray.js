// === Module 17688: stringToArray ===

// Module 17688 (stringToArray)
import _mod17687 from "module_17687" /* 17687 */;
import unicodeToArray from "unicodeToArray" /* 17689 */;
import asciiToArray from "asciiToArray" /* 17690 */;


export default function stringToArray(arg0) {
  if (_mod17687(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};