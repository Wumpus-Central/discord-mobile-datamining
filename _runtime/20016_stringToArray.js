// _runtime/20016_stringToArray.js
import _mod20015 from "metro/20015__.js";
import unicodeToArray from "20017_unicodeToArray.js";
import asciiToArray from "20018_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20015(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
