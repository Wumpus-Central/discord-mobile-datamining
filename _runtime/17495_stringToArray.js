// _runtime/17495_stringToArray.js
import _mod17494 from "metro/17494__.js";
import unicodeToArray from "17496_unicodeToArray.js";
import asciiToArray from "17497_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17494(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
