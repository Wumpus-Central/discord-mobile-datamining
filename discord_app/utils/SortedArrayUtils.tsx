// === Module 5183: insertionIndex ===

// Module 5183 (insertionIndex)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/SortedArrayUtils.tsx");

export const insertionIndex = function insertionIndex(arg0, arg1, arg2) {
  let sum;
  let tmp4;
  let length = arg0.length;
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    do {
      let tmp = num + length >>> 1;
      let tmp2 = length;
      sum = num;
      tmp4 = tmp;
      if (arg2(arg0[tmp], arg1) < 0) {
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
export const insert = function insert(arr) {
  let sum;
  let tmp4;
  let length = arr.length;
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    do {
      let tmp = num + length >>> 1;
      let tmp2 = length;
      sum = num;
      tmp4 = tmp;
      if (arg2(arr[tmp], arg1) < 0) {
        sum = tmp + 1;
        tmp4 = length;
      }
      length = tmp4;
      num = sum;
      num2 = sum;
    } while (sum < tmp4);
  }
  arr.splice(num2, 0, arg1);
};