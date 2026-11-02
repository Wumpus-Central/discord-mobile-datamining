// === Module 19866: stringToArray ===

// Module 19866 (stringToArray)
import _mod19865 from "module_19865" /* 19865 */;
import unicodeToArray from "unicodeToArray" /* 19867 */;
import asciiToArray from "asciiToArray" /* 19868 */;


export default function stringToArray(arg0) {
  if (_mod19865(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};