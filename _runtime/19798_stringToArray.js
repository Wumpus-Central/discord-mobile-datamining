// _runtime/19798_stringToArray.js
import _mod19797 from "metro/19797__.js";
import unicodeToArray from "19799_unicodeToArray.js";
import asciiToArray from "19800_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19797(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
