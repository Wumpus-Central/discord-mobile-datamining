// _runtime/04589_baseIsMap.js
import isObjectLike from "00620_isObjectLike.js";
import _mod770 from "metro/00770__.js";


export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod770(arg0);
  }
  return tmp3;
};