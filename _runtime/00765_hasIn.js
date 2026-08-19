// === Module 765: hasIn ===

// Module 765 (hasIn)
import hasPath from "hasPath" /* 766 */;
import baseHasIn from "baseHasIn" /* 767 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = hasPath(arg0, arg1, baseHasIn);
  }
  return tmp;
};