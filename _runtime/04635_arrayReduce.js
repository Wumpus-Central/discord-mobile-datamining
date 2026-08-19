// _runtime/04635_arrayReduce.js

export default function arrayReduce(height, fn) {
  let num = 0;
  if (null != height) {
    num = height.length;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = num;
  }
  let first = arg2;
  let num2 = -1;
  if (tmp) {
    first = height[0];
    num2 = 0;
  }
  let sum = num2 + 1;
  let tmp4 = first;
  let tmp5 = first;
  if (sum < num) {
    do {
      tmp4 = fn(tmp4, height[sum], sum, height);
      sum = sum + 1;
      tmp5 = tmp4;
    } while (sum < num);
  }
  return tmp5;
};