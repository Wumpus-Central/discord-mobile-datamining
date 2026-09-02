// === Module 762: hasIn ===

// Module 762 (hasIn)
import hasPath from "hasPath" /* 763 */;
import baseHasIn from "baseHasIn" /* 764 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hasPath(arg0, arg1, baseHasIn);
    const tmp5 = hasPath;
  }
  return tmp;
};