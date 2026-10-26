// _runtime/19195_stringToArray.js
import _mod19194 from "metro/19194__.js";
import unicodeToArray from "19196_unicodeToArray.js";
import asciiToArray from "19197_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19194(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
