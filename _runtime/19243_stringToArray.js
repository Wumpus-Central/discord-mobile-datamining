// _runtime/19243_stringToArray.js
import _mod19242 from "metro/19242__.js";
import unicodeToArray from "19244_unicodeToArray.js";
import asciiToArray from "19245_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19242(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
