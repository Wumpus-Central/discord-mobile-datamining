// _runtime/18039_stringToArray.js
import _mod18038 from "metro/18038__.js";
import unicodeToArray from "18040_unicodeToArray.js";
import asciiToArray from "18041_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18038(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
