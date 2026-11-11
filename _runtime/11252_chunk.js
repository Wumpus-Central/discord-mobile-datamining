// _runtime/11252_chunk.js
import _mod6021 from "metro/06021__.js";
import _mod7605 from "metro/07605__.js";
import baseSlice from "11253_baseSlice.js";

export default function chunk(arg0, arg1, arg2) {
  let sum1;
  if (arg2) {
    let tmp = _mod7605(arg0, arg1, arg2);
  } else {
    tmp = undefined === arg1;
  }
  let num = 1;
  if (!tmp) {
    num = max(_mod6021(arg1), 0);
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
}
