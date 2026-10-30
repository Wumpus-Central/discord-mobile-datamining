// _runtime/00590_baseGet.js
import _mod588 from "metro/00588__.js";
import castPath from "00591_castPath.js";

export default function baseGet(arg0, arg1) {
  const arr = castPath(arg1, arg0);
  let num = 0;
  let tmp = arg0;
  if (null != arg0) {
    let num3 = 0;
    let tmp2 = arg0;
    num = 0;
    tmp = arg0;
    if (0 < length) {
      const sum = num3 + 1;
      const tmp6 = tmp2[_mod588(undefined, arr[num3])];
      num = sum;
      tmp = tmp6;
      while (null != tmp6) {
        num3 = sum;
        tmp2 = tmp6;
        tmp = tmp6;
        num = sum;
        if (sum >= length) {
          break;
        }
      }
    }
  }
  let tmp7;
  if (num) {
    if (num == length) {
      tmp7 = tmp;
    }
  }
  return tmp7;
}
