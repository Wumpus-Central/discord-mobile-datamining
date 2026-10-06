// _runtime/04994_baseIsSet.js
import isObjectLike from "00535_isObjectLike.js";
import _mod645 from "metro/00645__.js";

export default function baseIsSet(arg0) {
  const tmp3 = isObjectLike(arg0) && "[object Set]" == _mod645(arg0);
  return tmp3;
}
