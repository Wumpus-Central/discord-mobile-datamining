// _runtime/18234_stringToArray.js
import _mod18233 from "metro/18233__.js";
import unicodeToArray from "18235_unicodeToArray.js";
import asciiToArray from "18236_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18233(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
