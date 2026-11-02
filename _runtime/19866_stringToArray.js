// _runtime/19866_stringToArray.js
import _mod19865 from "metro/19865__.js";
import unicodeToArray from "19867_unicodeToArray.js";
import asciiToArray from "19868_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19865(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
