// _runtime/04623_baseIsMap.js
import isObjectLike from "00617_isObjectLike.js";
import _mod767 from "metro/00767__.js";

export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod767(arg0);
  }
  return tmp3;
}
