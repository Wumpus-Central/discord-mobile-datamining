// === Module 20494: stringToArray ===

// Module 20494 (stringToArray)
import _mod20493 from "module_20493" /* 20493 */;
import unicodeToArray from "unicodeToArray" /* 20495 */;
import asciiToArray from "asciiToArray" /* 20496 */;


export default function stringToArray(arg0) {
  if (_mod20493(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};