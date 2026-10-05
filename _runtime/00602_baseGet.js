// === Module 602: baseGet ===

// Module 602 (baseGet)
import toKey from "toKey" /* 600 */;
import castPath from "castPath" /* 603 */;


export default function baseGet(arg0, arg1) {
  const arr = castPath(arg1, arg0);
  let num = 0;
  let tmp = arg0;
  if (null != arg0) {
    let num3 = 0;
    let tmp2 = arg0;
    num = 0;
    tmp = arg0;
    if (0 < arr.length) {
      const sum = num3 + 1;
      const tmp6 = tmp2[toKey(undefined, arr[num3])];
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
    if (num == arr.length) {
      tmp7 = tmp;
    }
  }
  return tmp7;
};