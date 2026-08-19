// _runtime/11064_arrayAggregator.js

export default function arrayAggregator(height, fn, fn2, closure_0) {
  let num = 0;
  if (null != height) {
    num = height.length;
  }
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    let tmp = height[num2];
    let tmp5 = fn(closure_0, tmp, fn2(tmp), height);
  }
  return closure_0;
};