// === Module 9208: baseSlice ===

// Module 9208 (baseSlice)

export default function baseSlice(arg0, arg1, arg2) {
  let tmp = arg1;
  if (arg1 < 0) {
    let num = 0;
    if (-arg1 <= length) {
      num = length + arg1;
    }
    tmp = num;
  }
  let tmp2 = arg2;
  if (arg2 > arg0.length) {
    tmp2 = length;
  }
  let sum = tmp2;
  if (tmp2 < 0) {
    sum = tmp2 + length;
  }
  let num2 = 0;
  if (tmp <= sum) {
    num2 = sum - tmp >>> 0;
  }
  const ArrayResult = Array(num2);
  let num3 = 0;
  if (0 < num2) {
    do {
      ArrayResult[num3] = arg0[num3 + tmp4];
      num3 = num3 + 1;
    } while (num3 < num2);
  }
  return ArrayResult;
};