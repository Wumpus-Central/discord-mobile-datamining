// _runtime/18363_stringToArray.js
import _mod18362 from "metro/18362__.js";
import unicodeToArray from "18364_unicodeToArray.js";
import asciiToArray from "18365_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18362(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
