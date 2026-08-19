// _runtime/04555_baseFindIndex.js

export default function baseFindIndex(arr, fn) {
  let num = -1;
  if (arg3) {
    num = 1;
  }
  const sum = arg2 + num;
  if (arg3) {
    let diff = tmp4 - 1;
    let tmp3 = tmp4;
  } else {
    diff = sum + 1;
    tmp3 = diff < length;
  }
  if (tmp3) {
    while (!fn(arr[diff], diff, arr)) {
      if (arg3) {
        let tmp8 = +diff;
        let diff1 = tmp8 - 1;
      } else {
        diff1 = diff + 1;
      }
      diff = diff1;
    }
    return diff;
  }
  return -1;
};