// _runtime/17914_stringToArray.js
import _mod17913 from "metro/17913__.js";
import unicodeToArray from "17915_unicodeToArray.js";
import asciiToArray from "17916_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17913(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
