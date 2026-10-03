// _runtime/17844_stringToArray.js
import _mod17843 from "metro/17843__.js";
import unicodeToArray from "17845_unicodeToArray.js";
import asciiToArray from "17846_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17843(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
