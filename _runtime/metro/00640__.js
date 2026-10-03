// _runtime/metro/00640__.js
import _mod641 from "00641__.js";
import baseHasIn from "../00642_baseHasIn.js";

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod641(arg0, arg1, baseHasIn);
  }
  return tmp;
}
