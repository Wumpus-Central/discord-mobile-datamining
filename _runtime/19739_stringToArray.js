// === Module 19739: stringToArray ===

// Module 19739 (stringToArray)
import _mod19738 from "module_19738" /* 19738 */;
import unicodeToArray from "unicodeToArray" /* 19740 */;
import asciiToArray from "asciiToArray" /* 19741 */;


export default function stringToArray(arg0) {
  if (_mod19738(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};