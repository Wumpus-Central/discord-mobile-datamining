// _runtime/19164_stringToArray.js
import _mod19163 from "metro/19163__.js";
import unicodeToArray from "19165_unicodeToArray.js";
import asciiToArray from "19166_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19163(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
