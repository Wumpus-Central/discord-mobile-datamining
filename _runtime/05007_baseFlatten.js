// _runtime/05007_baseFlatten.js
import arrayPush from "00669_arrayPush.js";
import isFlattenable from "05008_isFlattenable.js";

function baseFlatten(arg0, arg1, arg2, arg3, arg4) {
  const tmp = arg2 || isFlattenable;
  const arr = arg4 || [];
  let num = 0;
  if (0 < arg0.length) {
    while (true) {
      let tmp4 = arg0[num];
      if (arg1 > 0) {
        if (tmp(tmp4)) {
          if (arg1 > 1) {
            let tmp14 = baseFlatten(tmp4, arg1 - 1, tmp, arg3, arr);
          } else {
            let tmp8 = arrayPush(arr, tmp4);
          }
          num = num + 1;
          if (num >= length) {
            break;
          }
        }
      }
      if (!arg3) {
        arr[arr.length] = tmp4;
      }
    }
  }
  return arr;
}

export default baseFlatten;
