// === Module 766: hasPath ===

// Module 766 (hasPath)
import _mod599 from "module_599" /* 599 */;
import isLength from "isLength" /* 604 */;
import baseIsArguments from "baseIsArguments" /* 618 */;
import isIndex from "isIndex" /* 628 */;
import toKey from "toKey" /* 725 */;
import castPath from "castPath" /* 728 */;


export default function hasPath(closure_0, arg1, fn) {
  let tmp4;
  const arr = castPath(arg1, closure_0);
  let num = 0;
  let tmp3 = closure_0;
  let flag = false;
  let num2 = 0;
  let arr2 = closure_0;
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
      if (!tmp8) {
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
  if (!flag) {
    tmp11 = flag;
    if (num2 + 1 == length) {
      let num3 = 0;
      if (null != arr2) {
        num3 = arr2.length;
      }
      let tmp12 = num3 && isLength(num3) && isIndex(tmp4, num3);
      if (tmp12) {
        tmp12 = _mod599(arr2) || baseIsArguments(arr2);
        const tmp13 = _mod599(arr2) || baseIsArguments(arr2);
      }
      tmp11 = tmp12;
    }
  }
  return tmp11;
};