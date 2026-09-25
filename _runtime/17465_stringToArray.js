// === Module 17465: stringToArray ===

// Module 17465 (stringToArray)
import _mod17464 from "module_17464" /* 17464 */;
import unicodeToArray from "unicodeToArray" /* 17466 */;
import asciiToArray from "asciiToArray" /* 17467 */;


export default function stringToArray(arg0) {
  if (_mod17464(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};