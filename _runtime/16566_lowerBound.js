// _runtime/16566_lowerBound.js
arg5.default = function lowerBound(arg0) {
  let diff;
  let length = arg0.length;
  let num = 0;
  let num2 = 0;
  if (length > 0) {
    do {
      let tmp = length / 2 | 0;
      let sum = num + tmp;
      let tmp3 = length;
      let sum1 = num;
      diff = tmp;
      if (arg2(arg0[sum], arg1) <= 0) {
        sum1 = sum + 1;
        diff = length - (tmp + 1);
      }
      length = diff;
      num = sum1;
      num2 = sum1;
    } while (0 < diff);
  }
  return num2;
};