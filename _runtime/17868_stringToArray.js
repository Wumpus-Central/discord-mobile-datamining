// _runtime/17868_stringToArray.js
import hasUnicode from "17867_hasUnicode.js";
import unicodeToArray from "17869_unicodeToArray.js";
import asciiToArray from "17870_asciiToArray.js";

export default function stringToArray(arg0) {
  let tmp3;
  if (hasUnicode(arg0)) {
    tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
