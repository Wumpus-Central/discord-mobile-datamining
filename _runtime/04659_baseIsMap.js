// _runtime/04659_baseIsMap.js
import isObjectLike from "00535_isObjectLike.js";
import _mod634 from "metro/00634__.js";

export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod634(arg0);
  }
  return tmp3;
}
