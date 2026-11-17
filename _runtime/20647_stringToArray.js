// _runtime/20647_stringToArray.js
import _mod20646 from "metro/20646__.js";
import unicodeToArray from "20648_unicodeToArray.js";
import asciiToArray from "20649_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20646(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
