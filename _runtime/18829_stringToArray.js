// _runtime/18829_stringToArray.js
import _mod18828 from "metro/18828__.js";
import unicodeToArray from "18830_unicodeToArray.js";
import asciiToArray from "18831_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18828(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
