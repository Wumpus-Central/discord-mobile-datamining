// _runtime/19967_stringToArray.js
import _mod19966 from "metro/19966__.js";
import unicodeToArray from "19968_unicodeToArray.js";
import asciiToArray from "19969_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19966(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
