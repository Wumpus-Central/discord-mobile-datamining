// _runtime/04589_baseIsSet.js
import isObjectLike from "00620_isObjectLike.js";
import _mod770 from "metro/00770__.js";


export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod770(arg0);
  }
  return tmp3;
};