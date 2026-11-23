// _runtime/19924_stringToArray.js
import _mod19923 from "metro/19923__.js";
import unicodeToArray from "19925_unicodeToArray.js";
import asciiToArray from "19926_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19923(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
