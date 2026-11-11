// _runtime/20494_stringToArray.js
import _mod20493 from "metro/20493__.js";
import unicodeToArray from "20495_unicodeToArray.js";
import asciiToArray from "20496_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20493(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
