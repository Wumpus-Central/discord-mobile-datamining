// _runtime/17133_baseDifference.js
import baseUnary from "00540_baseUnary.js";
import arrayMap from "00639_arrayMap.js";
import SetCache from "00657_SetCache.js";
import cacheHas from "00661_cacheHas.js";
import arrayIncludesWith from "15761_arrayIncludesWith.js";

export default function baseDifference(arg0, arg1, fn, arg3) {
  const items = [];
  if (arg0.length) {
    let tmpResultResult = arg1;
    if (fn) {
      tmpResultResult = arrayMap(arg1, baseUnary(fn));
      const tmpResult = arrayMap;
    }
    if (arg3) {
      let tmpResult2 = arrayIncludesWith;
      let flag = false;
      let tmp9 = tmpResultResult;
    } else {
      flag = true;
      tmpResult2 = tmp3;
      tmp9 = tmpResultResult;
      if (tmpResultResult.length >= 200) {
        tmpResult2 = cacheHas;
        tmp9 = new SetCache(tmpResultResult);
        flag = false;
      }
    }
    let num4 = 0;
    if (0 < length) {
      while (true) {
        let tmp14 = arg0[num4];
        let tmp16 = tmp14;
        if (null != fn) {
          tmp16 = fn(tmp14);
        }
        if (arg3) {
          let num5 = tmp14;
        } else {
          num5 = 0;
        }
        if (flag) {
          if (tmp16 == tmp16) {
            let tmp18 = +tmp4;
            let diff = tmp18 - 1;
            if (!tmp18) {
              let arr = items.push(num5);
            } else {
              while (tmp9[diff] !== tmp16) {
                let tmp21 = +diff;
                diff = tmp21 - 1;
              }
            }
            num4 = num4 + 1;
            if (num4 >= length) {
              break;
            }
          }
        }
        if (!tmpResult2(tmp9, tmp16, arg3)) {
          let arr2 = items.push(num5);
        }
      }
    }
    return items;
  } else {
    return items;
  }
}
