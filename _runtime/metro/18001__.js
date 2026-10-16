// _runtime/metro/18001__.js
import baseFlatten from "../05254_baseFlatten.js";
import baseRest from "../08730_baseRest.js";
import _mod18002 from "18002__.js";
import baseDifference from "../18003_baseDifference.js";

export default baseRest((arg0, arg1) => {
  if (_mod18002(arg0)) {
    const tmpResult = baseDifference;
    let tmpResultResult = tmpResult(arg0, baseFlatten(arg1, 1, _mod18002, true));
    const tmpResult2 = baseFlatten;
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
