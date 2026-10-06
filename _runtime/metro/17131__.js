// === Module 17131: ? ===

// Module 17131
import baseFlatten from "baseFlatten" /* 5007 */;
import baseRest from "baseRest" /* 8071 */;
import isArrayLikeObject from "isArrayLikeObject" /* 17132 */;
import baseDifference from "baseDifference" /* 17133 */;


export default baseRest((arg0, arg1) => {
  let tmpResultResult;
  if (isArrayLikeObject(arg0)) {
    const tmpResult = baseDifference;
    const tmpResult2 = baseFlatten;
    tmpResultResult = tmpResult(arg0, tmpResult2(arg1, 1, isArrayLikeObject, true));
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});