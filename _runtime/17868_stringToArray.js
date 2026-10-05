// === Module 17868: stringToArray ===

// Module 17868 (stringToArray)
import hasUnicode from "hasUnicode" /* 17867 */;
import unicodeToArray from "unicodeToArray" /* 17869 */;
import asciiToArray from "asciiToArray" /* 17870 */;


export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};