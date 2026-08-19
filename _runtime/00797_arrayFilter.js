// _runtime/00797_arrayFilter.js

export default function arrayFilter(arr, fn) {
  let num = 0;
  if (null != arr) {
    num = arr.length;
  }
  const items = [];
  let num2 = 0;
  let num3 = 0;
  if (0 < num) {
    do {
      let tmp = arr[num3];
      let sum = num2;
      if (fn(tmp, num3, arr)) {
        sum = num2 + 1;
        items[num2] = tmp;
      }
      num3 = num3 + 1;
      num2 = sum;
    } while (num3 < num);
  }
  return items;
};