// _runtime/18495_stringToArray.js
import _mod18494 from "metro/18494__.js";
import unicodeToArray from "18496_unicodeToArray.js";
import asciiToArray from "18497_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18494(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
