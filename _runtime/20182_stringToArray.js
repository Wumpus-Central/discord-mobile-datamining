// _runtime/20182_stringToArray.js
import _mod20181 from "metro/20181__.js";
import unicodeToArray from "20183_unicodeToArray.js";
import asciiToArray from "20184_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20181(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
