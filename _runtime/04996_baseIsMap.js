// _runtime/04996_baseIsMap.js
import isObjectLike from "00535_isObjectLike.js";
import _mod645 from "metro/00645__.js";

export default function baseIsMap(arg0) {
  const tmp3 = isObjectLike(arg0) && "[object Map]" == _mod645(arg0);
  return tmp3;
}
