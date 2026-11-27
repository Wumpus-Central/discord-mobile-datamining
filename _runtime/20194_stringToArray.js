// === Module 20194: stringToArray ===

// Module 20194 (stringToArray)
import _mod20193 from "module_20193" /* 20193 */;
import unicodeToArray from "unicodeToArray" /* 20195 */;
import asciiToArray from "asciiToArray" /* 20196 */;


export default function stringToArray(arg0) {
  if (_mod20193(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};