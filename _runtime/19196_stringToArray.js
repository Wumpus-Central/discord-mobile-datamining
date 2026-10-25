// _runtime/19196_stringToArray.js
import _mod19195 from "metro/19195__.js";
import unicodeToArray from "19197_unicodeToArray.js";
import asciiToArray from "19198_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19195(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
