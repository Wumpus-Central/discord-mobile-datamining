// _runtime/19506_stringToArray.js
import _mod19505 from "metro/19505__.js";
import unicodeToArray from "19507_unicodeToArray.js";
import asciiToArray from "19508_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19505(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
