// === Module 18495: stringToArray ===

// Module 18495 (stringToArray)
import _mod18494 from "module_18494" /* 18494 */;
import unicodeToArray from "unicodeToArray" /* 18496 */;
import asciiToArray from "asciiToArray" /* 18497 */;


export default function stringToArray(arg0) {
  if (_mod18494(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};