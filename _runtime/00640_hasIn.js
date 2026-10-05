// === Module 640: hasIn ===

// Module 640 (hasIn)
import hasPath from "hasPath" /* 641 */;
import baseHasIn from "baseHasIn" /* 642 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const tmp5 = hasPath;
    tmp = tmp5(arg0, arg1, baseHasIn);
  }
  return tmp;
};