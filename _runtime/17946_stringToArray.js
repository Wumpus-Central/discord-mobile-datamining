// === Module 17946: stringToArray ===

// Module 17946 (stringToArray)
import _mod17945 from "module_17945" /* 17945 */;
import unicodeToArray from "unicodeToArray" /* 17947 */;
import asciiToArray from "asciiToArray" /* 17948 */;


export default function stringToArray(arg0) {
  if (_mod17945(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};