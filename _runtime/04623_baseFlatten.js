// === Module 4623: baseFlatten ===

// Module 4623 (baseFlatten)
import arrayPush from "arrayPush" /* 794 */;
import isConcatSpreadable from "isConcatSpreadable" /* 4624 */;

function baseFlatten(arg0, arg1, arg2, arg3, arg4) {
  let tmp = arg2;
  if (!arg2) {
    tmp = isConcatSpreadable;
  }
  let items = arg4;
  if (!arg4) {
    items = [];
  }
  let num = 0;
  if (0 < arg0.length) {
    while (true) {
      let tmp4 = arg0[num];
      let tmp5 = num;
      if (arg1 > 0) {
        if (tmp(tmp4)) {
          if (arg1 > 1) {
            let tmp9 = baseFlatten;
            let tmp10 = tmp4;
            let tmp11 = tmp;
            let tmp12 = arg3;
            let tmp13 = items;
            let tmp14 = baseFlatten(tmp4, arg1 - 1, tmp, arg3, items);
          } else {
            let tmp6 = require;
            let tmp7 = dependencyMap;
            let tmp8 = arrayPush(items, tmp4);
          }
          num = num + 1;
          if (num >= length) {
            break;
          }
        }
      }
      if (!arg3) {
        items[items.length] = tmp4;
      }
    }
  }
  return items;
}

export default baseFlatten;