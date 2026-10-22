// === Module 19097: stringToArray ===

// Module 19097 (stringToArray)
import _mod19096 from "module_19096" /* 19096 */;
import unicodeToArray from "unicodeToArray" /* 19098 */;
import asciiToArray from "asciiToArray" /* 19099 */;


export default function stringToArray(arg0) {
  if (_mod19096(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};