// _runtime/00534_baseIsArguments.js
import baseGetTag from "00522_baseGetTag.js";
import isObjectLike from "00535_isObjectLike.js";

export default function baseIsArguments(arg0) {
  const tmp3 = isObjectLike(arg0) && "[object Arguments]" == baseGetTag(arg0);
  return tmp3;
}
