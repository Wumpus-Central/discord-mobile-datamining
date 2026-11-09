// _runtime/20271_stringToArray.js
import _mod20270 from "metro/20270__.js";
import unicodeToArray from "20272_unicodeToArray.js";
import asciiToArray from "20273_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20270(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
