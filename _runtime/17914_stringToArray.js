// _runtime/17914_stringToArray.js
import hasUnicode from "17913_hasUnicode.js";
import unicodeToArray from "17915_unicodeToArray.js";
import asciiToArray from "17916_asciiToArray.js";

export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
