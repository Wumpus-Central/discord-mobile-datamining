// _runtime/20189_stringToArray.js
import _mod20188 from "metro/20188__.js";
import unicodeToArray from "20190_unicodeToArray.js";
import asciiToArray from "20191_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20188(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
