// _runtime/metro/19604__.js
import baseFlatten from "../06089_baseFlatten.js";
import baseRest from "../07604_baseRest.js";
import _mod19605 from "19605__.js";
import baseDifference from "../19606_baseDifference.js";

export default baseRest((arg0, arg1) => {
  if (_mod19605(arg0)) {
    const tmpResult = baseDifference;
    let tmpResultResult = tmpResult(arg0, baseFlatten(arg1, 1, _mod19605, true));
    const tmpResult2 = baseFlatten;
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
