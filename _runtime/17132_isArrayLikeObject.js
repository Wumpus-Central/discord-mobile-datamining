// _runtime/17132_isArrayLikeObject.js
import isArrayLike from "00518_isArrayLike.js";
import isObjectLike from "00535_isObjectLike.js";

export default function isArrayLikeObject(arg0) {
  const tmp3 = isObjectLike(arg0) && isArrayLike(arg0);
  return tmp3;
}
