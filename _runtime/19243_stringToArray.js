// === Module 19243: stringToArray ===

// Module 19243 (stringToArray)
import _mod19242 from "module_19242" /* 19242 */;
import unicodeToArray from "unicodeToArray" /* 19244 */;
import asciiToArray from "asciiToArray" /* 19245 */;


export default function stringToArray(arg0) {
  if (_mod19242(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};