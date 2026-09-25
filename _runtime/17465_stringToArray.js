// _runtime/17465_stringToArray.js
import _mod17464 from "metro/17464__.js";
import unicodeToArray from "17466_unicodeToArray.js";
import asciiToArray from "17467_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17464(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
