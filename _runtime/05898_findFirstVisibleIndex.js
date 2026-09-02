// _runtime/05898_findFirstVisibleIndex.js
arg5.findFirstVisibleIndex = function findFirstVisibleIndex(layouts, bound1, horizontal) {
  let diff = layouts.length - 1;
  let num = -1;
  let num2 = -1;
  let num3 = 0;
  if (0 <= diff) {
    while (true) {
      let _Math = Math;
      let rounded = Math.floor((num3 + diff) / 2);
      let size = layouts[rounded];
      let tmp3 = num;
      let diff1 = diff;
      let tmp5 = num3;
      let tmp6 = horizontal ? size.x : size.y;
      if (tmp6 < bound1) {
        if (tmp6 + (horizontal ? size.width : size.height) <= bound1) {
          let sum = rounded + 1;
        }
        num = tmp3;
        diff = diff1;
        num3 = sum;
        num2 = tmp3;
        if (sum > diff1) {
          break;
        }
      }
      diff1 = rounded - 1;
      tmp3 = rounded;
      sum = num3;
    }
  }
  return num2;
};
arg5.findLastVisibleIndex = function findLastVisibleIndex(layouts, arg1, horizontal) {
  let diff1;
  let sum;
  let diff = layouts.length - 1;
  let num = -1;
  let num2 = -1;
  let num3 = 0;
  if (0 <= diff) {
    do {
      let _Math = Math;
      let rounded = Math.floor((num3 + diff) / 2);
      let size = layouts[rounded];
      let tmp3 = num;
      let tmp4 = diff;
      sum = num3;
      let tmp6 = horizontal ? size.x : size.y;
      if (horizontal) {
        let width = size.width;
      } else {
        let height = size.height;
      }
      if (tmp6 <= arg1) {
        sum = rounded + 1;
        tmp3 = rounded;
        diff1 = diff;
      } else {
        diff1 = rounded - 1;
      }
      num = tmp3;
      diff = diff1;
      num3 = sum;
      num2 = tmp3;
    } while (sum <= diff1);
  }
  return num2;
};
