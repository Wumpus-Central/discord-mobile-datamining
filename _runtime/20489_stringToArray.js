// _runtime/20489_stringToArray.js
import _mod20488 from "metro/20488__.js";
import unicodeToArray from "20490_unicodeToArray.js";
import asciiToArray from "20491_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod20488(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
