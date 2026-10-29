// _runtime/metro/18903__.js
import baseFlatten from "../05833_baseFlatten.js";
import baseRest from "../08910_baseRest.js";
import _mod18904 from "18904__.js";
import baseDifference from "../18905_baseDifference.js";

export default baseRest((arg0, arg1) => {
  if (_mod18904(arg0)) {
    const tmpResult = baseDifference;
    let tmpResultResult = tmpResult(arg0, baseFlatten(arg1, 1, _mod18904, true));
    const tmpResult2 = baseFlatten;
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
