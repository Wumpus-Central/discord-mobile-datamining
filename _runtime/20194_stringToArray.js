// _runtime/20194_stringToArray.js
import _mod20193 from "metro/20193__.js";
import unicodeToArray from "20195_unicodeToArray.js";
import asciiToArray from "20196_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20193(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
