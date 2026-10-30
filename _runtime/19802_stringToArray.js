// === Module 19802: stringToArray ===

// Module 19802 (stringToArray)
import _mod19801 from "module_19801" /* 19801 */;
import unicodeToArray from "unicodeToArray" /* 19803 */;
import asciiToArray from "asciiToArray" /* 19804 */;


export default function stringToArray(arg0) {
  if (_mod19801(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};