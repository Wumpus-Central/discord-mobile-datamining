// _runtime/metro/00531__.js
import isArrayLike from "../00518_isArrayLike.js";
import arrayLikeKeys from "../00532_arrayLikeKeys.js";
import baseKeys from "../00544_baseKeys.js";

export default function keys(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = arrayLikeKeys(arg0);
  } else {
    tmp3 = baseKeys(arg0);
  }
  return tmp3;
}
