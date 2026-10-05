// _runtime/17868_stringToArray.js
import _mod17867 from "metro/17867__.js";
import unicodeToArray from "17869_unicodeToArray.js";
import asciiToArray from "17870_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17867(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
