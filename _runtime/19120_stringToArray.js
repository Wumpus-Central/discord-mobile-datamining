// === Module 19120: stringToArray ===

// Module 19120 (stringToArray)
import _mod19119 from "module_19119" /* 19119 */;
import unicodeToArray from "unicodeToArray" /* 19121 */;
import asciiToArray from "asciiToArray" /* 19122 */;


export default function stringToArray(arg0) {
  if (_mod19119(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};