// _runtime/04367_baseFindIndex.js

export default function baseFindIndex(arg0, arg1, arg2, arg3) {
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
    while (!arg1(arg0[diff], diff, arg0)) {
      if (arg3) {
        let tmp8 = +diff;
        let diff1 = tmp8 - 1;
        let tmp7 = tmp8;
      } else {
        diff1 = diff + 1;
        tmp7 = diff1 < length;
      }
      diff = diff1;
    }
    return diff;
  }
  return -1;
};