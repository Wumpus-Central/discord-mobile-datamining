// _runtime/metro/00612__.js
import _mod613 from "00613__.js";
import baseIsNative from "../00614_baseIsNative.js";

export default function getNative(arg0, arg1) {
  const tmp = _mod613(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
}
