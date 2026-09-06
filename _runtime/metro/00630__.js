// === Module 630: ? ===

// Module 630
import _mod589 from "module_589" /* 589 */;
import castPath from "castPath" /* 592 */;

const _mod514 = tmp(514);
const _mod519 = tmp(519);
const baseIsArguments = tmp(533);
const _mod543 = tmp(543);

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
      let tmp7 = _mod589(arr[num]);
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
      let tmp12 = num3 && _mod519(num3) && _mod543(tmp4, num3);
      if (tmp12) {
        tmp12 = _mod514(arr2) || baseIsArguments(arr2);
        const tmp13 = _mod514(arr2) || baseIsArguments(arr2);
      }
      tmp11 = tmp12;
    }
  }
  return tmp11;
};