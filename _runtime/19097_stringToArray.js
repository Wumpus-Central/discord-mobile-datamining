// _runtime/19097_stringToArray.js
import _mod19096 from "metro/19096__.js";
import unicodeToArray from "19098_unicodeToArray.js";
import asciiToArray from "19099_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19096(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
