// === Module 629: hasIn ===

// Module 629 (hasIn)
import hasPath from "hasPath" /* 630 */;
import baseHasIn from "baseHasIn" /* 631 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hasPath(arg0, arg1, baseHasIn);
    const tmp5 = hasPath;
  }
  return tmp;
};