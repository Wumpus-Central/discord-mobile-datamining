// _runtime/19802_stringToArray.js
import _mod19801 from "metro/19801__.js";
import unicodeToArray from "19803_unicodeToArray.js";
import asciiToArray from "19804_asciiToArray.js";

export default function stringToArray(arg0) {
  if (_mod19801(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
}
