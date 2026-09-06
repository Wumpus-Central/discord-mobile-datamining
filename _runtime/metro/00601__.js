// _runtime/metro/00601__.js
import _mod602 from "00602__.js";
import baseIsNative from "../00603_baseIsNative.js";

export default function getNative(arg0, arg1) {
  const tmp = _mod602(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
}
