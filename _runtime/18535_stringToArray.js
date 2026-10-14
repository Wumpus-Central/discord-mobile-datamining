// _runtime/18535_stringToArray.js
import _mod18534 from "metro/18534__.js";
import unicodeToArray from "18536_unicodeToArray.js";
import asciiToArray from "18537_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18534(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
