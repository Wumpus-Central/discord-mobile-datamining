// _runtime/metro/00518__.js
import _mod519 from "00519__.js";
import _mod520 from "00520__.js";

export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod519(arg0.length);
  }
  if (tmp) {
    tmp = !_mod520(arg0);
  }
  return tmp;
}
