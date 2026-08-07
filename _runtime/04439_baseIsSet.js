// _runtime/04439_baseIsSet.js
import { isObjectLike } from "00620_isObjectLike.js";
import { 00770__ } from "metro/00770__.js";

export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == 00770__(arg0);
  }
  return tmp3;
};