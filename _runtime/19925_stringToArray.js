// _runtime/19925_stringToArray.js
import _mod19924 from "metro/19924__.js";
import unicodeToArray from "19926_unicodeToArray.js";
import asciiToArray from "19927_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19924(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
