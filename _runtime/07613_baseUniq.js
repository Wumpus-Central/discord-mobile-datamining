// === Module 7613: baseUniq ===

// Module 7613 (baseUniq)
import SetCache from "SetCache" /* 646 */;
import cacheHas from "cacheHas" /* 650 */;
import _mod654 from "module_654" /* 654 */;
import arrayIncludes from "arrayIncludes" /* 7614 */;
import arrayIncludesWith from "arrayIncludesWith" /* 7618 */;
import _mod7619 from "module_7619" /* 7619 */;


export default function baseUniq(arg0, fn, arg2) {
  let tmpResult = arrayIncludes;
  const items = [];
  if (arg2) {
    tmpResult = arrayIncludesWith;
    let flag = false;
    let items1 = items;
  } else if (length >= 200) {
    let tmp4 = null;
    if (!fn) {
      tmp4 = _mod7619(arg0);
    }
    if (tmp4) {
      return _mod654(tmp4);
    } else {
      tmpResult = cacheHas;
      items1 = new SetCache();
      flag = false;
    }
  } else {
    items1 = items;
    if (fn) {
      items1 = [];
    }
    flag = true;
  }
  let num2 = 0;
  if (0 < arg0.length) {
    while (true) {
      let tmp7 = arg0[num2];
      let tmp9 = tmp7;
      if (fn) {
        tmp9 = fn(tmp7);
      }
      if (arg2) {
        let num3 = tmp7;
      } else {
        num3 = 0;
      }
      if (flag) {
        if (tmp9 == tmp9) {
          let tmp12 = +items1.length;
          let diff = tmp12 - 1;
          if (!tmp12) {
            if (fn) {
              let arr = items1.push(tmp9);
            }
            arr = items.push(num3);
          } else {
            while (items1[diff] !== tmp9) {
              let tmp15 = +diff;
              diff = tmp15 - 1;
            }
          }
          num2 = num2 + 1;
          if (num2 >= length) {
            break;
          }
        }
      }
      if (!tmpResult(items1, tmp9, arg2)) {
        if (items1 !== items) {
          let arr1 = items1.push(tmp9);
        }
        let arr2 = items.push(num3);
      }
    }
  }
  return items;
};