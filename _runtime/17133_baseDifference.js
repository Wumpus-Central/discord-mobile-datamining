// === Module 17133: baseDifference ===

// Module 17133 (baseDifference)
import baseUnary from "baseUnary" /* 540 */;
import arrayMap from "arrayMap" /* 639 */;
import SetCache from "SetCache" /* 657 */;
import cacheHas from "cacheHas" /* 661 */;
import arrayIncludesWith from "arrayIncludesWith" /* 15761 */;


export default function baseDifference(arg0, arg1, fn, arg3) {
  const items = [];
  if (arg0.length) {
    let tmpResult2;
    let flag;
    let tmp9;
    let tmpResultResult = arg1;
    if (fn) {
      const tmpResult = arrayMap;
      tmpResultResult = tmpResult(arg1, baseUnary(fn));
    }
    const tmp7 = arg3;
    if (tmp7) {
      tmpResult2 = arrayIncludesWith;
      flag = false;
      tmp9 = tmpResultResult;
    } else {
      flag = true;
      tmpResult2 = tmp3;
      tmp9 = tmpResultResult;
      if (tmpResultResult.length >= 200) {
        tmpResult2 = cacheHas;
        const self = this;
        const self2 = this;
        tmp9 = new SetCache(tmpResultResult);
        flag = false;
      }
    }
    let num4 = 0;
    if (0 < arg0.length) {
      while (true) {
        let num5;
        let tmp12 = arg0[num4];
        let tmp14 = tmp12;
        if (null != fn) {
          tmp14 = fn(tmp12);
        }
        if (arg3) {
          num5 = tmp12;
        } else {
          num5 = 0;
        }
        if (flag) {
          if (tmp14 == tmp14) {
            let tmp16 = +tmp4;
            let diff = tmp16 - 1;
            if (!tmp16) {
              let arr = items.push(num5);
            } else {
              while (tmp9[diff] !== tmp14) {
                let tmp19 = +diff;
                diff = tmp19 - 1;
              }
            }
            num4 = num4 + 1;
            if (num4 >= length) {
              break;
            }
          }
        }
        if (!tmpResult2(tmp9, tmp14, arg3)) {
          let arr2 = items.push(num5);
        }
      }
    }
    return items;
  } else {
    return items;
  }
};