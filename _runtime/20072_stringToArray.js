// _runtime/20072_stringToArray.js
import _mod20071 from "metro/20071__.js";
import unicodeToArray from "20073_unicodeToArray.js";
import asciiToArray from "20074_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20071(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
