// === Module 20182: stringToArray ===

// Module 20182 (stringToArray)
import _mod20181 from "module_20181" /* 20181 */;
import unicodeToArray from "unicodeToArray" /* 20183 */;
import asciiToArray from "asciiToArray" /* 20184 */;


export default function stringToArray(arg0) {
  if (_mod20181(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};