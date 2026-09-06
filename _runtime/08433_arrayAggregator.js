// _runtime/08433_arrayAggregator.js

export default function arrayAggregator(arg0, fn, fn2, arg3) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    let tmp = arg0[num2];
    let tmp5 = fn(arg3, tmp, fn2(tmp), arg0);
  }
  return arg3;
}
