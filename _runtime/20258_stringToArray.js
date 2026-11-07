// _runtime/20258_stringToArray.js
import _mod20257 from "metro/20257__.js";
import unicodeToArray from "20259_unicodeToArray.js";
import asciiToArray from "20260_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20257(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
