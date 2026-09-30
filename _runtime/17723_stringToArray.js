// _runtime/17723_stringToArray.js
import _mod17722 from "metro/17722__.js";
import unicodeToArray from "17724_unicodeToArray.js";
import asciiToArray from "17725_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17722(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
