// === Module 11445: arrayAggregator ===

// Module 11445 (arrayAggregator)

export default function arrayAggregator(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    let tmp = arg0[num2];
    let tmp2 = arg3;
    let tmp3 = tmp;
    let tmp4 = arg0;
    let tmp5 = arg1(arg3, tmp, arg2(tmp), arg0);
  }
  return arg3;
};