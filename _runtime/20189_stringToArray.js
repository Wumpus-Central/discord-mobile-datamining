// === Module 20189: stringToArray ===

// Module 20189 (stringToArray)
import _mod20188 from "module_20188" /* 20188 */;
import unicodeToArray from "unicodeToArray" /* 20190 */;
import asciiToArray from "asciiToArray" /* 20191 */;


export default function stringToArray(arg0) {
  if (_mod20188(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};