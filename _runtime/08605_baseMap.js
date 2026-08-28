// === Module 8605: baseMap ===

// Module 8605 (baseMap)

export default function baseMap(arg0, arg1) {
  const _require = arg1;
  dependencyMap = -1;
  if (_require(603)(arg0)) {
    const _Array = Array;
    let ArrayResult = Array(arg0.length);
  } else {
    ArrayResult = [];
  }
  closure_2 = ArrayResult;
  _require(601)(arg0, (arg0, arg1, arg2) => {
    const sum = c1 + 1;
    c1 = sum;
    closure_2[sum] = callback(arg0, arg1, arg2);
  });
  return ArrayResult;
};