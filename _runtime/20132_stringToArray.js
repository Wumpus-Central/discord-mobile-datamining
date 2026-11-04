// _runtime/20132_stringToArray.js
import _mod20131 from "metro/20131__.js";
import unicodeToArray from "20133_unicodeToArray.js";
import asciiToArray from "20134_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20131(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
