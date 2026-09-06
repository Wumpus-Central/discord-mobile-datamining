// _runtime/08433_arrayAggregator.js

export default function arrayAggregator(height, fn, fn2, value) {
  let num = 0;
  if (null != height) {
    num = height.length;
  }
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    let tmp = height[num2];
    let tmp5 = fn(value, tmp, fn2(tmp), height);
  }
  return value;
}
