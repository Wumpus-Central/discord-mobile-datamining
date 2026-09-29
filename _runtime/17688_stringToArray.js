// _runtime/17688_stringToArray.js
import _mod17687 from "metro/17687__.js";
import unicodeToArray from "17689_unicodeToArray.js";
import asciiToArray from "17690_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17687(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
