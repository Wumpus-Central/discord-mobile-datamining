// _runtime/metro/00600__.js
import _mod601 from "00601__.js";
import baseIsNative from "../00602_baseIsNative.js";

export default function getNative(arg0, arg1) {
  const tmp = _mod601(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
}
