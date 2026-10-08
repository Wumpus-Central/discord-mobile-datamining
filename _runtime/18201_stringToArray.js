// _runtime/18201_stringToArray.js
import _mod18200 from "metro/18200__.js";
import unicodeToArray from "18202_unicodeToArray.js";
import asciiToArray from "18203_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18200(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
