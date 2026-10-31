// _runtime/19859_stringToArray.js
import _mod19858 from "metro/19858__.js";
import unicodeToArray from "19860_unicodeToArray.js";
import asciiToArray from "19861_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19858(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
