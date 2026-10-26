// _runtime/19205_stringToArray.js
import _mod19204 from "metro/19204__.js";
import unicodeToArray from "19206_unicodeToArray.js";
import asciiToArray from "19207_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19204(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
