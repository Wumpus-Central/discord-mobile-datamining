// _runtime/20136_stringToArray.js
import _mod20135 from "metro/20135__.js";
import unicodeToArray from "20137_unicodeToArray.js";
import asciiToArray from "20138_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20135(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
