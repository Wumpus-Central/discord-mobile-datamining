// _runtime/metro/17131__.js
import baseFlatten from "../05007_baseFlatten.js";
import baseRest from "../08071_baseRest.js";
import isArrayLikeObject from "../17132_isArrayLikeObject.js";
import baseDifference from "../17133_baseDifference.js";

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
