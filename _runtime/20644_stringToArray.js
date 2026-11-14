// _runtime/20644_stringToArray.js
import _mod20643 from "metro/20643__.js";
import unicodeToArray from "20645_unicodeToArray.js";
import asciiToArray from "20646_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20643(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
