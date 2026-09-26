// === Module 5586: SortedArrayUtils ===

// Module 5586 (SortedArrayUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SortedArrayUtils.tsx");

export const insertionIndex = function insertionIndex(arg0, key, fn) {
  let sum;
  let tmp4;
  let length = arg0.length;
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    do {
      let tmp = num + length >>> 1;
      sum = num;
      tmp4 = tmp;
      if (fn(arg0[tmp], key) < 0) {
        sum = tmp + 1;
        tmp4 = length;
      }
      length = tmp4;
      num = sum;
      num2 = sum;
    } while (sum < tmp4);
  }
  return num2;
};
export const insert = function insert(arr, messageRecord1, fn) {
  let sum;
  let tmp4;
  let length = arr.length;
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    do {
      let tmp = num + length >>> 1;
      sum = num;
      tmp4 = tmp;
      if (fn(arr[tmp], messageRecord1) < 0) {
        sum = tmp + 1;
        tmp4 = length;
      }
      length = tmp4;
      num = sum;
      num2 = sum;
    } while (sum < tmp4);
  }
  arr.splice(num2, 0, messageRecord1);
};
export const remove = function remove(arr, key, fn) {
  let sum;
  let tmp4;
  let length = arr.length;
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    do {
      let tmp = num + length >>> 1;
      sum = num;
      tmp4 = tmp;
      if (fn(arr[tmp], key) < 0) {
        sum = tmp + 1;
        tmp4 = length;
      }
      length = tmp4;
      num = sum;
      num2 = sum;
    } while (sum < tmp4);
  }
  const tmp5 = num2 >= arr.length || 0 !== fn(arr[num2], key);
  let flag = !tmp5;
  if (!tmp5) {
    arr.splice(num2, 1);
    flag = true;
  }
  return flag;
};