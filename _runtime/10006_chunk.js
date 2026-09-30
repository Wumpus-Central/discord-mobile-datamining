// === Module 10006: chunk ===

// Module 10006 (chunk)
import _mod4900 from "module_4900" /* 4900 */;
import _mod8029 from "module_8029" /* 8029 */;
import baseSlice from "baseSlice" /* 10007 */;


export default function chunk(arg0, arg1, arg2) {
  let sum1;
  if (arg2) {
    let tmp = _mod8029(arg0, arg1, arg2);
  } else {
    tmp = undefined === arg1;
  }
  let num = 1;
  if (!tmp) {
    num = max(_mod4900(arg1), 0);
  }
  let num3 = 0;
  if (null != arg0) {
    num3 = arg0.length;
  }
  if (num3) {
    if (num >= 1) {
      const _Array = Array;
      const ArrayResult = Array(ceil(num3 / num));
      let num4 = 0;
      let num5 = 0;
      if (0 < num3) {
        do {
          let sum = num4 + 1;
          sum1 = num5 + num;
          ArrayResult[num4] = baseSlice(arg0, num5, sum1);
          num4 = sum;
          num5 = sum1;
        } while (sum1 < num3);
      }
      return ArrayResult;
    }
  }
  return [];
};