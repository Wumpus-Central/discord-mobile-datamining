// _runtime/07691_baseMap.js

export default function baseMap(arg0, arg1) {
  const _require = arg1;
  const dependencyMap = -1;
  if (_require("00603_isArrayLike.js")(arg0)) {
    const _Array = Array;
    let ArrayResult = Array(arg0.length);
  } else {
    ArrayResult = [];
  }
  let closure_2 = ArrayResult;
  _require("00601_baseForOwn.js")(arg0, (arg0, arg1, arg2) => {
    const sum = c1 + 1;
    c1 = sum;
    closure_2[sum] = callback(arg0, arg1, arg2);
  });
  return ArrayResult;
};