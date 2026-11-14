// _runtime/metro/19797__.js
import baseFlatten from "../06152_baseFlatten.js";
import baseRest from "../07670_baseRest.js";
import _mod19798 from "19798__.js";
import baseDifference from "../19799_baseDifference.js";

export default baseRest((arg0, arg1) => {
  if (_mod19798(arg0)) {
    const tmpResult = baseDifference;
    let tmpResultResult = tmpResult(arg0, baseFlatten(arg1, 1, _mod19798, true));
    const tmpResult2 = baseFlatten;
  } else {
    tmpResultResult = [];
  }
  return tmpResultResult;
});
