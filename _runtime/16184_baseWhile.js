// === Module 16184: baseWhile ===

// Module 16184 (baseWhile)
import baseSlice from "baseSlice" /* 9559 */;


export default function baseWhile(arr, fn, arg2, arg3) {
  let length = arr.length;
  let num = -1;
  if (arg3) {
    num = length;
  }
  if (arg3) {
    let diff = tmp3 - 1;
    let tmp2 = tmp3;
  } else {
    diff = num + 1;
    tmp2 = diff < length;
  }
  let tmp4 = diff;
  if (tmp2) {
    let tmp6 = diff;
    tmp4 = diff;
    if (fn(arr[diff], diff, arr)) {
      while (true) {
        if (arg3) {
          let tmp10 = +tmp6;
          let diff1 = tmp10 - 1;
          let tmp9 = tmp10;
        } else {
          diff1 = tmp6 + 1;
          tmp9 = diff1 < length;
        }
        tmp4 = diff1;
        if (!tmp9) {
          break;
        } else {
          tmp6 = diff1;
          tmp4 = diff1;
          if (!fn(arr[diff1], diff1, arr)) {
            break;
          }
        }
      }
    }
  }
  const tmp11 = baseSlice;
  if (arg2) {
    let num4 = 0;
    if (!arg3) {
      num4 = tmp4;
    }
    if (arg3) {
      length = tmp4 + 1;
    }
    let tmp11Result = tmp11(arr, num4, length);
  } else {
    let num2 = 0;
    if (arg3) {
      num2 = tmp4 + 1;
    }
    let tmp12 = tmp4;
    if (arg3) {
      tmp12 = length;
    }
    tmp11Result = tmp11(arr, num2, tmp12);
  }
  return tmp11Result;
};