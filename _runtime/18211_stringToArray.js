// _runtime/18211_stringToArray.js
import _mod18210 from "metro/18210__.js";
import unicodeToArray from "18212_unicodeToArray.js";
import asciiToArray from "18213_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18210(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
