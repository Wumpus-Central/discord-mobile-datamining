// === Module 763: hasPath ===

// Module 763 (hasPath)
import _mod596 from "module_596" /* 596 */;
import isLength from "isLength" /* 601 */;
import baseIsArguments from "baseIsArguments" /* 615 */;
import isIndex from "isIndex" /* 625 */;
import toKey from "toKey" /* 722 */;
import castPath from "castPath" /* 725 */;


export default function hasPath(arg0, arg1, arg2) {
  let tmp4;
  let tmp = require;
  const arr = castPath(arg1, arg0);
  let num = 0;
  let tmp3 = arg0;
  let flag = false;
  let num2 = 0;
  let arr2 = arg0;
  if (0 < arr.length) {
    while (true) {
      let tmp5 = require;
      let tmp6 = dependencyMap;
      let tmp7 = toKey(arr[num]);
      let tmp8 = null != tmp3;
      let tmp9 = num;
      let tmp10 = tmp3;
      if (tmp8) {
        tmp8 = arg2(tmp3, tmp7);
      }
      tmp4 = tmp7;
      num2 = num;
      arr2 = tmp3;
      let tmp2 = tmp6;
      tmp = tmp5;
      flag = tmp8;
      if (!tmp8) {
        break;
      } else {
        tmp3 = tmp3[tmp7];
        num = num + 1;
        tmp4 = tmp7;
        flag = tmp8;
        arr2 = tmp3;
        tmp2 = tmp6;
        tmp = tmp5;
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
        tmp12 = _mod596(arr2) || baseIsArguments(arr2);
        const tmp13 = _mod596(arr2) || baseIsArguments(arr2);
      }
      tmp11 = tmp12;
    }
  }
  return tmp11;
};