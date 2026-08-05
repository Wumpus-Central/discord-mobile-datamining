// _runtime/06966_baseUniq.js
import { arrayIncludes } from "06967_arrayIncludes.js";

export default function baseUniq(arg0, arg1, arg2) {
  let tmpResult = arrayIncludes;
  const items = [];
  if (arg2) {
    tmpResult = tmp(6971);
    let flag = false;
    let items1 = items;
  } else if (length >= 200) {
    let tmp4 = null;
    if (!arg1) {
      tmp4 = tmp(6972)(arg0);
    }
    if (tmp4) {
      return tmp(790)(tmp4);
    } else {
      tmpResult = tmp(786);
      items1 = new tmp(782)();
      flag = false;
    }
  } else {
    items1 = items;
    if (arg1) {
      items1 = [];
    }
    flag = true;
  }
  let num2 = 0;
  if (0 < arg0.length) {
    while (true) {
      let tmp7 = arg0[num2];
      let tmp8 = num2;
      let tmp9 = tmp7;
      if (arg1) {
        tmp9 = arg1(tmp7);
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
            if (arg1) {
              let arr = items1.push(tmp9);
            }
            arr = items.push(num3);
          } else {
            let tmp14 = diff;
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