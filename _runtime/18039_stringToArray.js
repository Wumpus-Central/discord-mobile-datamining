// === Module 18039: stringToArray ===

// Module 18039 (stringToArray)
import _mod18038 from "module_18038" /* 18038 */;
import unicodeToArray from "unicodeToArray" /* 18040 */;
import asciiToArray from "asciiToArray" /* 18041 */;


export default function stringToArray(arg0) {
  if (_mod18038(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};