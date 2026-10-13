// _runtime/18499_stringToArray.js
import _mod18498 from "metro/18498__.js";
import unicodeToArray from "18500_unicodeToArray.js";
import asciiToArray from "18501_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18498(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
