// _runtime/00765_hasIn.js
import hasPath from "hasPath" /* 766 */;
import baseHasIn from "baseHasIn" /* 767 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hasPath(arg0, arg1, baseHasIn);
    const tmp5 = hasPath;
  }
  return tmp;
};