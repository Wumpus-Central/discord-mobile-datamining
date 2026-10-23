// _runtime/19120_stringToArray.js
import _mod19119 from "metro/19119__.js";
import unicodeToArray from "19121_unicodeToArray.js";
import asciiToArray from "19122_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19119(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
