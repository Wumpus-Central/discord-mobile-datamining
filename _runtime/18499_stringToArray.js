// === Module 18499: stringToArray ===

// Module 18499 (stringToArray)
import _mod18498 from "module_18498" /* 18498 */;
import unicodeToArray from "unicodeToArray" /* 18500 */;
import asciiToArray from "asciiToArray" /* 18501 */;


export default function stringToArray(arg0) {
  if (_mod18498(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};