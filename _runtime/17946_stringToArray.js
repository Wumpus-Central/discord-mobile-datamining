// _runtime/17946_stringToArray.js
import _mod17945 from "metro/17945__.js";
import unicodeToArray from "17947_unicodeToArray.js";
import asciiToArray from "17948_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod17945(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
