// _runtime/17758_stringToArray.js
import _mod17757 from "metro/17757__.js";
import unicodeToArray from "17759_unicodeToArray.js";
import asciiToArray from "17760_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17757(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
