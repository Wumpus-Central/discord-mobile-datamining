// _runtime/18142_stringToArray.js
import _mod18141 from "metro/18141__.js";
import unicodeToArray from "18143_unicodeToArray.js";
import asciiToArray from "18144_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18141(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
