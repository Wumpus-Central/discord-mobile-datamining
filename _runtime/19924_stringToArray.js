// === Module 19924: stringToArray ===

// Module 19924 (stringToArray)
import _mod19923 from "module_19923" /* 19923 */;
import unicodeToArray from "unicodeToArray" /* 19925 */;
import asciiToArray from "asciiToArray" /* 19926 */;


export default function stringToArray(arg0) {
  if (_mod19923(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};