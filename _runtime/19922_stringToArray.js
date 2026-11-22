// === Module 19922: stringToArray ===

// Module 19922 (stringToArray)
import _mod19921 from "module_19921" /* 19921 */;
import unicodeToArray from "unicodeToArray" /* 19923 */;
import asciiToArray from "asciiToArray" /* 19924 */;


export default function stringToArray(arg0) {
  if (_mod19921(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};