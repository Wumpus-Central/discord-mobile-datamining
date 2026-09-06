// _runtime/metro/00629__.js
import _mod630 from "00630__.js";
import baseHasIn from "../00631_baseHasIn.js";

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod630(arg0, arg1, baseHasIn);
  }
  return tmp;
}
