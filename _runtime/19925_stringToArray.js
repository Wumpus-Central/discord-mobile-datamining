// === Module 19925: stringToArray ===

// Module 19925 (stringToArray)
import _mod19924 from "module_19924" /* 19924 */;
import unicodeToArray from "unicodeToArray" /* 19926 */;
import asciiToArray from "asciiToArray" /* 19927 */;


export default function stringToArray(arg0) {
  if (_mod19924(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};