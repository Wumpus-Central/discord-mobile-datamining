// === Module 4610: arrayReduce ===

// Module 4610 (arrayReduce)

export default function arrayReduce(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = num;
  }
  let first = arg2;
  let num2 = -1;
  if (tmp) {
    first = arg0[0];
    num2 = 0;
  }
  let sum = num2 + 1;
  let tmp4 = first;
  let tmp5 = first;
  if (sum < num) {
    do {
      let tmp6 = tmp4;
      let tmp7 = sum;
      let tmp8 = arg0;
      tmp4 = arg1(tmp4, arg0[sum], sum, arg0);
      sum = sum + 1;
      tmp5 = tmp4;
    } while (sum < num);
  }
  return tmp5;
};