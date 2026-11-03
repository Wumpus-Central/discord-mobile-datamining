// === Module 20016: stringToArray ===

// Module 20016 (stringToArray)
import _mod20015 from "module_20015" /* 20015 */;
import unicodeToArray from "unicodeToArray" /* 20017 */;
import asciiToArray from "asciiToArray" /* 20018 */;


export default function stringToArray(arg0) {
  if (_mod20015(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};