// _runtime/18816_stringToArray.js
import _mod18815 from "metro/18815__.js";
import unicodeToArray from "18817_unicodeToArray.js";
import asciiToArray from "18818_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18815(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
