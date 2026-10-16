// === Module 18829: stringToArray ===

// Module 18829 (stringToArray)
import _mod18828 from "module_18828" /* 18828 */;
import unicodeToArray from "unicodeToArray" /* 18830 */;
import asciiToArray from "asciiToArray" /* 18831 */;


export default function stringToArray(arg0) {
  if (_mod18828(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};