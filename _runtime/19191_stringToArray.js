// _runtime/19191_stringToArray.js
import _mod19190 from "metro/19190__.js";
import unicodeToArray from "19192_unicodeToArray.js";
import asciiToArray from "19193_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19190(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
