// === Module 20647: stringToArray ===

// Module 20647 (stringToArray)
import _mod20646 from "module_20646" /* 20646 */;
import unicodeToArray from "unicodeToArray" /* 20648 */;
import asciiToArray from "asciiToArray" /* 20649 */;


export default function stringToArray(arg0) {
  if (_mod20646(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};