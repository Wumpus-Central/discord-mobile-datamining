// === Module 17914: stringToArray ===

// Module 17914 (stringToArray)
import hasUnicode from "hasUnicode" /* 17913 */;
import unicodeToArray from "unicodeToArray" /* 17915 */;
import asciiToArray from "asciiToArray" /* 17916 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};