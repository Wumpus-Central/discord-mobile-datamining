// _runtime/19030_stringToArray.js
import _mod19029 from "metro/19029__.js";
import unicodeToArray from "19031_unicodeToArray.js";
import asciiToArray from "19032_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19029(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
