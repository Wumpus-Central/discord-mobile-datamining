// _runtime/18130_stringToArray.js
import _mod18129 from "metro/18129__.js";
import unicodeToArray from "18131_unicodeToArray.js";
import asciiToArray from "18132_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18129(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
