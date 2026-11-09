// === Module 20271: stringToArray ===

// Module 20271 (stringToArray)
import _mod20270 from "module_20270" /* 20270 */;
import unicodeToArray from "unicodeToArray" /* 20272 */;
import asciiToArray from "asciiToArray" /* 20273 */;


export default function stringToArray(arg0) {
  if (_mod20270(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};