// === Module 18234: stringToArray ===

// Module 18234 (stringToArray)
import _mod18233 from "module_18233" /* 18233 */;
import unicodeToArray from "unicodeToArray" /* 18235 */;
import asciiToArray from "asciiToArray" /* 18236 */;


export default function stringToArray(arg0) {
  if (_mod18233(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};