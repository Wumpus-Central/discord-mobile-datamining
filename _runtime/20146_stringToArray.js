// _runtime/20146_stringToArray.js
import _mod20145 from "metro/20145__.js";
import unicodeToArray from "20147_unicodeToArray.js";
import asciiToArray from "20148_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20145(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
