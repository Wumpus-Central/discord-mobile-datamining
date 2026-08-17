// _runtime/00619_baseIsArguments.js
import toStringTag from "00607_toStringTag.js";
import isObjectLike from "00620_isObjectLike.js";


export default function baseIsArguments(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == toStringTag(arg0);
  }
  return tmp3;
};