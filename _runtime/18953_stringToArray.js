// === Module 18953: stringToArray ===

// Module 18953 (stringToArray)
import _mod18952 from "module_18952" /* 18952 */;
import unicodeToArray from "unicodeToArray" /* 18954 */;
import asciiToArray from "asciiToArray" /* 18955 */;


export default function stringToArray(arg0) {
  if (_mod18952(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};