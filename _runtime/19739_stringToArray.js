// _runtime/19739_stringToArray.js
import _mod19738 from "metro/19738__.js";
import unicodeToArray from "19740_unicodeToArray.js";
import asciiToArray from "19741_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19738(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
