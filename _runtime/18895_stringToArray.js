// === Module 18895: stringToArray ===

// Module 18895 (stringToArray)
import _mod18894 from "module_18894" /* 18894 */;
import unicodeToArray from "unicodeToArray" /* 18896 */;
import asciiToArray from "asciiToArray" /* 18897 */;


export default function stringToArray(arg0) {
  if (_mod18894(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};