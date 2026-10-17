// === Module 18891: stringToArray ===

// Module 18891 (stringToArray)
import _mod18890 from "module_18890" /* 18890 */;
import unicodeToArray from "unicodeToArray" /* 18892 */;
import asciiToArray from "asciiToArray" /* 18893 */;


export default function stringToArray(arg0) {
  if (_mod18890(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};