// === Module 5010: basePickBy ===

// Module 5010 (basePickBy)
import baseGet from "baseGet" /* 602 */;
import castPath from "castPath" /* 603 */;
import baseSet from "baseSet" /* 5011 */;


export default function basePickBy(arg0, arg1, fn) {
  let num;
  const obj = {};
  const length = arg1.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp4 = baseGet(arg0, tmp);
    if (fn(tmp4, tmp)) {
      let tmp2Result = baseSet;
      let tmp2ResultResult = tmp2Result(obj, castPath(tmp, arg0), tmp4);
    }
  }
  return obj;
};