// _runtime/19978_stringToArray.js
import _mod19977 from "metro/19977__.js";
import unicodeToArray from "19979_unicodeToArray.js";
import asciiToArray from "19980_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19977(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
