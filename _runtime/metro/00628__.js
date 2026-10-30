// _runtime/metro/00628__.js
import _mod629 from "00629__.js";
import baseHasIn from "../00630_baseHasIn.js";

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod629(arg0, arg1, baseHasIn);
  }
  return tmp;
}
