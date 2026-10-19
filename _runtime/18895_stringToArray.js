// _runtime/18895_stringToArray.js
import _mod18894 from "metro/18894__.js";
import unicodeToArray from "18896_unicodeToArray.js";
import asciiToArray from "18897_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18894(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
