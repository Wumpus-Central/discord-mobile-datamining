// === Module 5843: basePickBy ===

// Module 5843 (basePickBy)
import baseGet from "baseGet" /* 590 */;
import castPath from "castPath" /* 591 */;
import baseSet from "baseSet" /* 5844 */;


export default function basePickBy(arg0, arg1, fn) {
  const obj = {};
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