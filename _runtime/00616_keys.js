// _runtime/00616_keys.js
import isArrayLike from "00603_isArrayLike.js";
import arrayLikeKeys from "00617_arrayLikeKeys.js";
import baseKeys from "00629_baseKeys.js";


export default function keys(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = arrayLikeKeys(arg0);
  } else {
    tmp3 = baseKeys(arg0);
  }
  return tmp3;
};