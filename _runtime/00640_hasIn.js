// _runtime/00640_hasIn.js
import hasPath from "00641_hasPath.js";
import baseHasIn from "00642_baseHasIn.js";

export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const tmp5 = hasPath;
    tmp = tmp5(arg0, arg1, baseHasIn);
  }
  return tmp;
}
