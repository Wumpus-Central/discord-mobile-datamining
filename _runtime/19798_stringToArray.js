// === Module 19798: stringToArray ===

// Module 19798 (stringToArray)
import _mod19797 from "module_19797" /* 19797 */;
import unicodeToArray from "unicodeToArray" /* 19799 */;
import asciiToArray from "asciiToArray" /* 19800 */;


export default function stringToArray(arg0) {
  if (_mod19797(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};