// _runtime/18930_stringToArray.js
import _mod18929 from "metro/18929__.js";
import unicodeToArray from "18931_unicodeToArray.js";
import asciiToArray from "18932_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18929(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
