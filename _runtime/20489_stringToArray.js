// === Module 20489: stringToArray ===

// Module 20489 (stringToArray)
import _mod20488 from "module_20488" /* 20488 */;
import unicodeToArray from "unicodeToArray" /* 20490 */;
import asciiToArray from "asciiToArray" /* 20491 */;


export default function stringToArray(arg0) {
  if (_mod20488(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};