// _runtime/00601_getNative.js
import getValue from "00602_getValue.js";
import baseIsNative from "00603_baseIsNative.js";

export default function getNative(arg0, arg1) {
  const tmp = getValue(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
}
