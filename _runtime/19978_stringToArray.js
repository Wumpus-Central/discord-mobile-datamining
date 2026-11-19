// === Module 19978: stringToArray ===

// Module 19978 (stringToArray)
import _mod19977 from "module_19977" /* 19977 */;
import unicodeToArray from "unicodeToArray" /* 19979 */;
import asciiToArray from "asciiToArray" /* 19980 */;


export default function stringToArray(arg0) {
  if (_mod19977(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};