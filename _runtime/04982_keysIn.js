// _runtime/04982_keysIn.js
import isArrayLike from "00518_isArrayLike.js";
import arrayLikeKeys from "00532_arrayLikeKeys.js";
import baseKeysIn from "04983_baseKeysIn.js";

export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = arrayLikeKeys(arg0, true);
  } else {
    tmp3 = baseKeysIn(arg0);
  }
  return tmp3;
}
