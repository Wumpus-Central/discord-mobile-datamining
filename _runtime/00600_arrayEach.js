// _runtime/00600_arrayEach.js

export default function arrayEach(arr, fn) {
  let num = 0;
  if (null != arr) {
    num = arr.length;
  }
  if (0 < num) {
    let num3 = 0;
    if (false !== fn(arr[0], 0, arr)) {
      const sum = num3 + 1;
      while (sum < num) {
        num3 = sum;
        if (false === fn(arr[sum], sum, arr)) {
          break;
        }
      }
    }
  }
  return arr;
};