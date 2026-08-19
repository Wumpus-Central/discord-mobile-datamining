// _runtime/04598_keysIn.js
import isArrayLike from "00603_isArrayLike.js";
import arrayLikeKeys from "00617_arrayLikeKeys.js";
import baseKeysIn from "04599_baseKeysIn.js";


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = arrayLikeKeys(arg0, true);
  } else {
    tmp3 = baseKeysIn(arg0);
  }
  return tmp3;
};