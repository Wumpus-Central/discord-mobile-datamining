// _runtime/00629_hasIn.js
import hasPath from "00630_hasPath.js";
import baseHasIn from "00631_baseHasIn.js";

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hasPath(arg0, arg1, baseHasIn);
    const tmp5 = hasPath;
  }
  return tmp;
}
