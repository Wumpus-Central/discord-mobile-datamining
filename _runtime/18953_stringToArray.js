// _runtime/18953_stringToArray.js
import _mod18952 from "metro/18952__.js";
import unicodeToArray from "18954_unicodeToArray.js";
import asciiToArray from "18955_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18952(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
