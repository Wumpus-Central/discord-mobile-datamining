// _runtime/04424_baseIsMap.js
import { isObjectLike } from "00620_isObjectLike.js";
import { 00770__ } from "metro/00770__.js";

export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike /* isObjectLike */(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == 00770__(arg0);
  }
  return tmp3;
};