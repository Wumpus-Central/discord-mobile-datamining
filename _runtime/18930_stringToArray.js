// === Module 18930: stringToArray ===

// Module 18930 (stringToArray)
import _mod18929 from "module_18929" /* 18929 */;
import unicodeToArray from "unicodeToArray" /* 18931 */;
import asciiToArray from "asciiToArray" /* 18932 */;


export default function stringToArray(arg0) {
  if (_mod18929(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};