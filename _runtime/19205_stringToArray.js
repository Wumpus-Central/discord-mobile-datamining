// === Module 19205: stringToArray ===

// Module 19205 (stringToArray)
import _mod19204 from "module_19204" /* 19204 */;
import unicodeToArray from "unicodeToArray" /* 19206 */;
import asciiToArray from "asciiToArray" /* 19207 */;


export default function stringToArray(arg0) {
  if (_mod19204(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};