// _runtime/20299_stringToArray.js
import _mod20298 from "metro/20298__.js";
import unicodeToArray from "20300_unicodeToArray.js";
import asciiToArray from "20301_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20298(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
