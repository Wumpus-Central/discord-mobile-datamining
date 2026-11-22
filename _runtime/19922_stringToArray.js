// _runtime/19922_stringToArray.js
import _mod19921 from "metro/19921__.js";
import unicodeToArray from "19923_unicodeToArray.js";
import asciiToArray from "19924_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19921(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
