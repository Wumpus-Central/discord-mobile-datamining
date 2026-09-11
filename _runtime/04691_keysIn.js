// _runtime/04691_keysIn.js
import _mod518 from "metro/00518__.js";
import arrayLikeKeys from "00532_arrayLikeKeys.js";
import baseKeysIn from "04692_baseKeysIn.js";

export default function keysIn(arg0) {
  if (_mod518(arg0)) {
    let tmp3 = arrayLikeKeys(arg0, true);
  } else {
    tmp3 = baseKeysIn(arg0);
  }
  return tmp3;
}
