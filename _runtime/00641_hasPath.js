// === Module 641: hasPath ===

// Module 641 (hasPath)
import toKey from "toKey" /* 600 */;
import castPath from "castPath" /* 603 */;

let tmp;
const _mod514 = tmp(514);
const isLength = tmp(519);
const baseIsArguments = tmp(533);
const isIndex = tmp(543);

export default function hasPath(arg0, arg1, fn) {
  let tmp4;
  const arr = castPath(arg1, arg0);
  let num = 0;
  let tmp3 = arg0;
  let flag = false;
  let num2 = 0;
  let arr2 = arg0;
  if (0 < arr.length) {
    while (true) {
      let tmp7 = toKey(arr[num]);
      let tmp8 = null != tmp3;
      if (tmp8) {
        tmp8 = fn(tmp3, tmp7);
      }
      tmp4 = tmp7;
      num2 = num;
      arr2 = tmp3;
      flag = tmp8;
      if (!flag) {
        break;
      } else {
        tmp3 = tmp3[tmp7];
        num = num + 1;
        tmp4 = tmp7;
        flag = tmp8;
        arr2 = tmp3;
        num2 = num;
        if (num >= length) {
          break;
        }
      }
    }
  }
  let tmp11 = flag;
  if (!tmp11) {
    tmp11 = flag;
    if (num2 + 1 == arr.length) {
      let num3 = 0;
      if (null != arr2) {
        num3 = arr2.length;
      }
      let tmp12 = num3 && isLength(num3) && isIndex(tmp4, num3);
      if (tmp12) {
        tmp12 = _mod514(arr2) || baseIsArguments(arr2);
        _mod514(arr2) || baseIsArguments(arr2);
      }
      tmp11 = tmp12;
    }
  }
  return tmp11;
};