// _runtime/17499_stringToArray.js
import _mod17498 from "metro/17498__.js";
import unicodeToArray from "17500_unicodeToArray.js";
import asciiToArray from "17501_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17498(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
