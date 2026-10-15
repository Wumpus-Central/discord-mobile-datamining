// _runtime/18774_stringToArray.js
import _mod18773 from "metro/18773__.js";
import unicodeToArray from "18775_unicodeToArray.js";
import asciiToArray from "18776_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod18773(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
