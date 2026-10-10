// _runtime/18437_stringToArray.js
import _mod18436 from "metro/18436__.js";
import unicodeToArray from "18438_unicodeToArray.js";
import asciiToArray from "18439_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18436(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
