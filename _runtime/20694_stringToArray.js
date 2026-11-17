// _runtime/20694_stringToArray.js
import _mod20693 from "metro/20693__.js";
import unicodeToArray from "20695_unicodeToArray.js";
import asciiToArray from "20696_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20693(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
