// _runtime/18119_stringToArray.js
import _mod18118 from "metro/18118__.js";
import unicodeToArray from "18120_unicodeToArray.js";
import asciiToArray from "18121_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18118(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
